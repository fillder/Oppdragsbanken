// Konstanter (delte)
const startPosisjon = { oppstart0815: 1, oppstart0900: 2, oppstart0955: 3 };
const blokkVarighet = { enkel: 1, dobbel: 2, trippel: 3, frippel: 4 };

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
  programfag: "Programfag",
  standard: "fridag",
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
  h6.textContent = startTid && sluttTid ? `${startTid}-${sluttTid}` : "";
  return h6;
}

function byggFagbeholder({ fagKey, startTid, sluttTid }) {
  const fagbeholder = document.createElement("div");
  fagbeholder.className = "fagbeholder";
  fagbeholder.appendChild(byggTittel(fagKey));
  fagbeholder.appendChild(byggIkon(fagKey));
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
  // Lærere for fag med klasser (IMA/B/C)
  const laerereKlasse = {
    programfag: { IMA: "Eirik", IMB: "Stian", IMC: "Jon" },
    matte: { IMA: "Sivert", IMB: "Lars Tore", IMC: "Mikkel" },
  };

  // Lærere for fag med grupper (IMX/Y)
  const laerereGruppe = {
    engelsk: { IMX: "Mari", IMY: "Kjetil" },
    kroppsoeving: { IMX: "Ajdin", IMY: "Laila Kristin" },
    naturfag: { IMX: "Thomas", IMY: "Sivert" },
  };

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
      h4.textContent = `1${klasse}`;
      const h5 = document.createElement("h5");
      h5.textContent = element.classList.contains(`Marius${klasse}`) ? "Marius" : laerereKlasse[fagNavn][klasse];
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
      h5.textContent = laerereGruppe[fagNavn][gruppe];
      div.append(h4, h5);
      gruppeGrid.prepend(div);
    });
    element.prepend(gruppeGrid);
  });
}

// Konsturer timeplanen og elevinndelinger etter at DOM-elementene har lastet inn
document.addEventListener("DOMContentLoaded", () => {
  byggGrupper();
  byggTimeplan();
});
