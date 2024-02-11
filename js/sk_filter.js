function filterVg1Input() {
   let vg1Checked = document.getElementById("filterVg1").checked;
   const vg1Elementer = document.querySelectorAll(".skVg1");

   if (vg1Checked) {
      vg1Elementer.forEach(function (element) {
         element.style.display = "block"; // eller 'none' basert på behov
      });
      document.getElementById("filterVg2").checked = false; // Fjern avhuking av VG2
      document.getElementById("filterBegge").checked = false; // Fjern avhuking av Begge
      filterVg2Input();
   } else if (!vg1Checked) {
      vg1Elementer.forEach(function (element) {
         element.style.display = "none"; // eller 'none' basert på behov
      });
   }
}
function filterVg2Input() {
   let vg2Checked = document.getElementById("filterVg2").checked;
   const vg2Elementer = document.querySelectorAll(".skVg2");

   if (vg2Checked) {
      vg2Elementer.forEach(function (element) {
         element.style.display = "block"; // eller 'none' basert på behov
      });
      document.getElementById("filterVg1").checked = false; // Fjern avhuking av VG2
      document.getElementById("filterBegge").checked = false; // Fjern avhuking av Begge
      filterVg1Input();
   } else if (!vg2Checked) {
      vg2Elementer.forEach(function (element) {
         element.style.display = "none"; // eller 'none' basert på behov
      });
   }
}
function filterBeggeInput() {
   let beggeChecked = document.getElementById("filterBegge").checked;
   const vg1Elementer = document.querySelectorAll(".skVg1");
   const vg2Elementer = document.querySelectorAll(".skVg2");
   const alleElementer = Array.from(vg1Elementer).concat(Array.from(vg2Elementer));

   if (beggeChecked) {
      alleElementer.forEach(function (element) {
         element.style.display = "block";
      });
      document.getElementById("filterVg1").checked = false;
      document.getElementById("filterVg2").checked = false;
   } else {
      alleElementer.forEach(function (element) {
         element.style.display = "none";
      });
   }
}
function filterKlasseInput() {
   let klasseChecked = document.getElementById("filterTrinn").checked;
   const klTekstElementer = document.querySelectorAll(".klTekst");

   if (klasseChecked) {
      klTekstElementer.forEach(function (element) {
         element.style.display = "none"; // eller 'none' basert på behov
      });
   } else if (!klasseChecked)
      klTekstElementer.forEach(function (element) {
         element.style.display = "inline-block"; // eller 'none' basert på behov
      });
}
function filterBeskrivelseInput() {
   let beskrivelseChecked = document.getElementById("filterBeskrivelse").checked;
   const beskrivelseElementer = document.querySelectorAll(".fagBeskrivelse");

   if (beskrivelseChecked) {
      beskrivelseElementer.forEach(function (element) {
         element.style.display = "none"; // eller 'none' basert på behov
      });
   } else if (!beskrivelseChecked)
      beskrivelseElementer.forEach(function (element) {
         element.style.display = "block"; // eller 'none' basert på behov
      });
}
function filterVarsel() {
   let vg1Checked = document.getElementById("filterVg1").checked;
   let vg2Checked = document.getElementById("filterVg2").checked;
   let beggeChecked = document.getElementById("filterBegge").checked;
   const filterVarsel = document.getElementById("filterVarsel");

   if (!vg1Checked && !vg2Checked && !beggeChecked) {
      filterVarsel.style.display = "block"; // eller 'none' basert på behov
   } else {
      filterVarsel.style.display = "none"; // eller 'none' basert på behov
   }
}

window.onload = function checkFilter() {
   document.getElementById("filterVg1").checked = true;
   document.getElementById("filterTrinn").checked = true;
   filterVg2Input();
   filterVg1Input();
   filterKlasseInput();
   filterVarsel();
   filterBeskrivelseInput();
};
