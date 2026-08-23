// Konstanter (delte)
const startPosisjon = { oppstart0815: 1, oppstart0900: 2, oppstart0955: 3, oppstart1040: 4, oppstart1210: 5 };
const blokkVarighet = { enkel: 1, dobbel: 2, trippel: 3, frippel: 4, femmer: 5, turdag: 6, fulldag: 9 };

const starttider = [
  { startRad: 1, tid: "08:15" },
  { startRad: 2, tid: "09:00" },
  { startRad: 3, tid: "09:55" },
  { startRad: 4, tid: "10:40" },
  { startRad: 5, tid: "12:10" },
  { startRad: 6, tid: "12:55" },
  { startRad: 7, tid: "13:50" },
  { startRad: 8, tid: "14:35" },
  { startRad: 9, tid: "15:30" },
];

const sluttider = [
  { sluttRad: 2, tid: "09:00" },
  { sluttRad: 3, tid: "09:45" },
  { sluttRad: 4, tid: "10:40" },
  { sluttRad: 5, tid: "11:25" },
  { sluttRad: 6, tid: "12:55" },
  { sluttRad: 7, tid: "13:40" },
  { sluttRad: 8, tid: "14:35" },
  { sluttRad: 9, tid: "15:20" },
  { sluttRad: 10, tid: "16:15" },
];

const fagNavn = {
  forum: "Forum",
  matte: "Matte",
  kroppsoeving: "Kroppsøving",
  engelsk: "Engelsk",
  naturfag: "Naturfag",
  tur: "Skoletur",
  aktivitet: "Aktivitetsdag",
  od: "OD-dagen",
  programfagsamlet: "Programfag",
  programfag: "Programfag",
  aapendag: "Åpen dag",
  standard: "Fridag",
  yff: "YFF",
  yff2: "YFF",
  workshops: "Workshops",
};

// --- Byggefunksjoner (små, fokuserte) ---

function byggIkon(fagKey) {
  const ikon = document.createElement("div");
  ikon.classList.add("svgIkon");
  if (fagKey) ikon.classList.add(`${fagKey}Ikon`);
  return ikon;
}

function byggTittel(fagKey) {
  const h3 = document.createElement("h3");
  h3.textContent = fagNavn[fagKey] || fagNavn.standard;
  return h3;
}

function byggKlokke(startTid, sluttTid) {
  const h6 = document.createElement("h6");
  h6.textContent = startTid && sluttTid ? `${startTid} ${sluttTid}` : "";
  return h6;
}

function byggFagbeholder({ fagKey, startTid, sluttTid }) {
  const fagbeholder = document.createElement("div");
  fagbeholder.className = "fagbeholder";
  fagbeholder.appendChild(byggIkon(fagKey));
  fagbeholder.appendChild(byggTittel(fagKey));
  fagbeholder.appendChild(byggKlokke(startTid, sluttTid));
  return fagbeholder;
}

// --- Hjelpefunksjoner for beregning/logikk ---

function finnSkolestart(dag) {
  let skolestart = 1;
  const startElement = dag.querySelector(".oppstart0815, .oppstart0900, .oppstart0955");
  if (startElement) {
    for (const klasseNavn of startElement.classList) {
      if (startPosisjon[klasseNavn]) {
        skolestart = startPosisjon[klasseNavn];
        break;
      }
    }
  }
  return skolestart;
}

function finnStartRad(undervisning, nesteRad) {
  // 1) eksplisitt startklasse
  for (const klasseNavn of undervisning.classList) {
    if (startPosisjon[klasseNavn]) return startPosisjon[klasseNavn];
  }
  // 2) CSS grid-row-start
  const cssStartverdi = getComputedStyle(undervisning).gridRowStart;
  const parset = parseInt(cssStartverdi, 10);
  if (!Number.isNaN(parset)) return parset;
  // 3) fallback
  return nesteRad;
}

function finnVarighet(undervisning) {
  return Array.from(undervisning.classList).reduce((span, klasseNavn) => blokkVarighet[klasseNavn] ?? span, 1);
}

function finnTider(startRad, antallRader) {
  const sluttRad = startRad + antallRader;
  const startTid = starttider.find((x) => x.startRad === startRad)?.tid || "";
  const sluttTid = sluttider.find((x) => x.sluttRad === sluttRad)?.tid || "";
  return { startTid, sluttTid, sluttRad };
}

function finnFagKey(undervisning) {
  return Array.from(undervisning.classList).find((klasse) => fagNavn[klasse]);
}

// --- Orkestrator ---

function byggTimeplan() {
  const dager = document.querySelectorAll("#timeplan > section");

  dager.forEach((dag) => {
    let nesteRad = finnSkolestart(dag);
    const undervisningsblokker = dag.querySelectorAll(".undervisning");

    undervisningsblokker.forEach((undervisning) => {
      const startRad = finnStartRad(undervisning, nesteRad);
      const antallRader = finnVarighet(undervisning);
      const { startTid, sluttTid, sluttRad } = finnTider(startRad, antallRader);
      const fagKey = finnFagKey(undervisning);

      const fagbeholder = byggFagbeholder({ fagKey, startTid, sluttTid });
      undervisning.prepend(fagbeholder);

      nesteRad = sluttRad; // flytt cursor
    });
  });
}

function byggGrupper() {
  const laerereTrinn = {
    programfag: { IMAUD: "Marthe, Iver, Jon" },
    tur: { TUR: "Marthe, Iver, Jon" },
    forum: { IMAUD: "Iver og Jon" },
    aapendag: { F21: "Alle IM-lærerne" },
  };

  // Lærere for fag med klasser (IMA/B/C)
  const laerereKlasse = {
    programfag: { IMC: "Jon", IMB: "Iver", IMA: "Marthe" },
    yff: { IMC: "Jon", IMB: "Iver", IMA: "Edvin" },
    yff2: { IMC: "Endre", IMB: "Marius", IMA: "Edvin" },
    matte: { IMC: "Mikkel", IMB: "Stian", IMA: "Anja" },
  };

  // Lærere for fag med grupper (IMX/Y)
  const laerereGruppe = {
    engelsk: { IMY: "Runar", IMX: "Ingrid" },
    forum: { IMY: "Iver", IMX: "Jon" },
    kroppsoeving: { IMYK: "Laila Kristin", IMXK: "Ajdin" },
    naturfag: { IMY: "Sheima", IMX: "Gina" },
    programfag: { IMY: "Marthe, Iver og Jon", IMX: "Marthe, Iver og Jon" },
    matte: { IMY: "Anja", IMX: "Mikkel" },
  };

  // Bygg .trinn-elementer
  document.querySelectorAll(".trinn").forEach((element) => {
    const fagNavn = Object.keys(laerereTrinn).find((fag) => element.classList.contains(fag));

    // hopp over hvis ukjent fag
    if (!fagNavn) return;
    const trinnFlex = document.createElement("div");
    trinnFlex.className = "trinnFlex";
    Object.keys(laerereTrinn[fagNavn]).forEach((trinn) => {
      const div = document.createElement("div");
      div.className = trinn;
      const h4 = document.createElement("h4");
      h4.textContent = `${trinn}`;
      const h5 = document.createElement("h5");
      if (element.classList.contains("MariusIMA")) {
        h5.textContent = "Marius, Iver, og Jon";
      } else if (element.classList.contains("MariusIMB")) {
        h5.textContent = "Marthe, Marius, og Jon";
      } else if (element.classList.contains("MariusIMC")) {
        h5.textContent = "Marthe, Iver, og Marius";
      } else {
        h5.textContent = laerereTrinn[fagNavn][trinn];
      }
      div.append(h4, h5);
      trinnFlex.prepend(div);
    });
    element.prepend(trinnFlex);
  });
  // Bygg .klasse-elementer
  document.querySelectorAll(".klasse").forEach((element) => {
    const fagNavn = Object.keys(laerereKlasse).find((fag) => element.classList.contains(fag));

    // hopp over hvis ukjent fag
    if (!fagNavn) return;
    const klasseGrid = document.createElement("div");
    klasseGrid.className = "klasseGrid";
    Object.keys(laerereKlasse[fagNavn]).forEach((klasse) => {
      const div = document.createElement("div");
      div.className = klasse;
      const h4 = document.createElement("h4");
      h4.textContent = `${klasse}`;
      const h5 = document.createElement("h5");
      if (element.classList.contains(`Marius${klasse}`)) {
        h5.textContent = "Marius";
      } else if (element.classList.contains(`Gabriel${klasse}`)) {
        h5.textContent = "Gabriel";
      } else if (element.classList.contains(`Iver${klasse}`)) {
        h5.textContent = "Iver";
      } else if (element.classList.contains(`Jon${klasse}`)) {
        h5.textContent = "Jon";
      } else if (element.classList.contains(`Torbjørn${klasse}`)) {
        h5.textContent = "Torbjørn";
      } else if (element.classList.contains(`Vikar${klasse}`)) {
        h5.textContent = "Vikar";
      } else if (element.classList.contains(`Endre${klasse}`)) {
        h5.textContent = "Endre";
      } else if (element.classList.contains(`Iver${klasse}`)) {
        h5.textContent = "Iver";
      } else if (element.classList.contains(`Marthe${klasse}`)) {
        h5.textContent = "Marthe";
      } else if (element.classList.contains(`Hassan${klasse}`)) {
        h5.textContent = "Hassan";
      } else {
        h5.textContent = laerereKlasse[fagNavn][klasse];
      }
      div.append(h4, h5);
      klasseGrid.prepend(div);
    });
    element.prepend(klasseGrid);
  });

  // Bygg .gruppe-elementer
  document.querySelectorAll(".gruppe").forEach((element) => {
    const fagNavn = Object.keys(laerereGruppe).find((fag) => element.classList.contains(fag));

    // hopp over hvis ukjent fag
    if (!fagNavn) return;
    const gruppeGrid = document.createElement("div");
    gruppeGrid.className = "gruppeGrid";
    Object.keys(laerereGruppe[fagNavn]).forEach((gruppe) => {
      const div = document.createElement("div");
      div.className = gruppe;
      const h4 = document.createElement("h4");
      h4.textContent = gruppe;
      const h5 = document.createElement("h5");
      if (element.classList.contains(`Marius${gruppe}`)) {
        h5.textContent = "Marius, Iver, Jon";
      } else if (element.classList.contains(`Hassan${gruppe}`)) {
        h5.textContent = "Hassan";
      } else {
        h5.textContent = laerereGruppe[fagNavn][gruppe];
      }
      div.append(h4, h5);
      gruppeGrid.prepend(div);
    });
    // Slå sammen like lærerverdier til én felles linje
    const alleH5 = Array.from(gruppeGrid.querySelectorAll("h5"));
    const verdier = alleH5.map((h5) => h5.textContent);
    if (verdier.length > 1 && verdier.every((v) => v === verdier[0] && v !== "")) {
      alleH5.forEach((h5) => h5.remove());
      const fellesH5 = document.createElement("h5");
      fellesH5.textContent = verdier[0];
      fellesH5.style.gridColumn = "1 / -1"; // span across all grid columns
      gruppeGrid.appendChild(fellesH5);
    }
    element.prepend(gruppeGrid);
  });
}

function sjekkFridag() {
  const fagbeholdere = document.querySelectorAll(".fagbeholder");

  fagbeholdere.forEach((beholder) => {
    const h3 = beholder.querySelector("h3");
    const h6 = beholder.querySelector("h6");
    const div = beholder.querySelector("div");

    if (h3.textContent === "Fridag") {
      h6.style.display = "none";
      div.style.display = "none";
      h3.style.marginInline = "auto";
      h3.classList.add("fri");

      beholder.style.display = "flex";
      beholder.style.marginInlineEnd = "0";
      beholder.style.height = "45px";
    }
  });
}


const romData = {
  IMA: "A: Ø201",
  IMB: "B: Ø211",
  IMTA: "A: TV-studio",
  IMTB: "B: TV-studio",
  IMTC: "C: TV-studio",
  IMC: "C: Ø204",
  IMY: "Y: Ø204",
  IMX: "X: Ø201",
  IMYK: "Y: Sal 1",
  IMXK: "X: Sal 2",
  IMAUD: "Auditoriet",
  F21: "Hele skolen",
  TUR: "Skoletur",
};

function leggTilRom() {
  const trinnFlex = document.querySelectorAll(".trinnFlex");
  const klasseGrid = document.querySelectorAll(".klasseGrid");
  const gruppeGrid = document.querySelectorAll(".gruppeGrid");

  trinnFlex.forEach((Flex) => {
    const divs = Flex.querySelectorAll("div");

    divs.forEach((div) => {
      const trinn = div.className;
      const h4 = div.querySelector("h4");

      if (romData[trinn] && h4) {
        h4.textContent = romData[trinn];
      }
    });
  });

  klasseGrid.forEach((Grid) => {
    const divs = Grid.querySelectorAll("div");

    divs.forEach((div) => {
      const klasse = div.className;
      const h4 = div.querySelector("h4");

      if (romData[klasse] && h4) {
        h4.textContent = romData[klasse];
      }
    });
  });

  gruppeGrid.forEach((Grid) => {
    const divs = Grid.querySelectorAll("div");

    divs.forEach((div) => {
      const gruppe = div.className;
      const h4 = div.querySelector("h4");

      if (romData[gruppe] && h4) {
        h4.textContent = romData[gruppe];
      }
    });
  });
}
// Konsturer timeplanen og elevinndelinger etter at DOM-elementene har lastet inn
document.addEventListener("DOMContentLoaded", () => {
  byggGrupper();
  byggTimeplan();
  sjekkFridag();
  leggTilRom();
});
