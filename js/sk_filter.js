let visTema = document.getElementById("temaer");
let visHardSkills = document.getElementById("hardSkills");
let visSoftSkills = document.getElementById("softSkills");
let velgTemeKnapp = document.getElementById("velgTemeKnapp");
let velgFagKnapp = document.getElementById("velgFagKnapp");
let velgYrkeKnapp = document.getElementById("velgYrkeKnapp");

function velgTema() {
	if (visTema.classList.contains("skjult")) {
		visTema.classList.remove("skjult");
		visHardSkills.classList.add("skjult");
		visSoftSkills.classList.add("skjult");
		velgFagKnapp.classList.add("knappInaktiv");
		velgYrkeKnapp.classList.add("knappInaktiv");
		velgTemeKnapp.classList.remove("knappInaktiv");
	} else {
		visTema.classList.add("skjult");
		velgFagKnapp.classList.remove("knappInaktiv");
		velgYrkeKnapp.classList.remove("knappInaktiv");
	}
}
function velgFag() {
	if (visHardSkills.classList.contains("skjult")) {
		visHardSkills.classList.remove("skjult");
		visTema.classList.add("skjult");
		visSoftSkills.classList.add("skjult");
		velgTemeKnapp.classList.add("knappInaktiv");
		velgYrkeKnapp.classList.add("knappInaktiv");
		velgFagKnapp.classList.remove("knappInaktiv");
	} else {
		visHardSkills.classList.add("skjult");
		velgTemeKnapp.classList.remove("knappInaktiv");
		velgYrkeKnapp.classList.remove("knappInaktiv");
	}
}
function velgYrke() {
	if (visSoftSkills.classList.contains("skjult")) {
		visSoftSkills.classList.remove("skjult");
		visTema.classList.add("skjult");
		visHardSkills.classList.add("skjult");
		velgFagKnapp.classList.add("knappInaktiv");
		velgTemeKnapp.classList.add("knappInaktiv");
		velgYrkeKnapp.classList.remove("knappInaktiv");
	} else {
		visSoftSkills.classList.add("skjult");
		velgFagKnapp.classList.remove("knappInaktiv");
		velgTemeKnapp.classList.remove("knappInaktiv");
	}
}

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
	const kl1TekstElementer = document.querySelectorAll(".kl1Tekst");
	const kl2TekstElementer = document.querySelectorAll(".kl2Tekst");

	if (klasseChecked) {
		kl1TekstElementer.forEach(function (element) {
			element.textContent = "";
		});
		kl2TekstElementer.forEach(function (element) {
			element.textContent = "";
		});
	} else if (!klasseChecked) {
		kl1TekstElementer.forEach(function (element) {
			element.textContent = "VG1: ";
		});
		kl2TekstElementer.forEach(function (element) {
			element.textContent = "VG2: ";
		});
	}
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
			element.style.display = "grid"; // eller 'none' basert på behov
		});
}
function filterOpenInput() {
	let openAlleChecked = document.getElementById("filterOpen").checked;
	const openElementer = document.querySelectorAll(".fagBakgrunn");

	if (openAlleChecked) {
		openElementer.forEach(function (element) {
			element.open = true;
		});
	} else if (!openAlleChecked)
		openElementer.forEach(function (element) {
			element.open = false;
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
/*
function filtrerKriterie(id) {
   // Gjem alle suksesskriteriene
   let skjulKriterier = document.getElementsByClassName("suksesskriterie");
   for (let i = 0; i < skjulKriterier.length; i++) {
      skjulKriterier[i].style.display = "none";
   }

   // Vis bare det klikkede elementet
   let aktivDiv = document.getElementById(id);
   aktivDiv.style.display = "block";

   // Finn <details>-foreldren til det aktive <div>
   let aktivDetails = aktivDiv.closest(".fagBakgrunn");

   // Skjul alle <details>-elementer unntatt den aktive
   let alleDetails = document.getElementsByClassName("fagBakgrunn");
   for (let j = 0; j < alleDetails.length; j++) {
      if (alleDetails[j] !== aktivDetails) {
         alleDetails[j].style.display = "none";
      }
   }
   let fjernFilter = document.getElementById("fjernFilterKnapp");
   fjernFilter.style.display = "block";

   let visOppdrag = document.getElementById("driftOppdrag");
   visOppdrag.style.display = "block";
}*/
function fjernFiltrering() {
	// Vis alle suksesskriteriene
	let visKriterier = document.getElementsByClassName("suksesskriterie");
	for (let i = 0; i < visKriterier.length; i++) {
		visKriterier[i].style.display = "block";
	}

	// Åpne alle <details>-elementer med klassen "fagBakgrunn"
	let alleDetails = document.getElementsByClassName("fagBakgrunn");
	for (let j = 0; j < alleDetails.length; j++) {
		alleDetails[j].style.display = "block";
	}
	let fjernFilter = document.getElementById("fjernFilterKnapp");
	fjernFilter.style.display = "none";
	let fjernOppdrag = document.getElementById("driftOppdrag");
	fjernOppdrag.style.display = "none";
}

function filterSpice0() {
	// Hent referansen til checkboxen
	let filterSpiceNøytral = document.getElementById("filterNøytral");
	// Finn alle <a>-elementer som inneholder et <div> med klassen 'spice5'
	let Spice0Oppdrag = Array.from(document.querySelectorAll("a:has(.spice0)"));
	// Sett display-stil for hver <a>-element basert på checkboxens status
	Spice0Oppdrag.forEach(function (link) {
		link.style.display = filterSpiceNøytral.checked ? "grid" : "none";
	});
}
function filterSpice1() {
	let filterSpiceKrydret = document.getElementById("filterKrydret");
	let Spice1Oppdrag = Array.from(document.querySelectorAll("a:has(.spice1)"));
	Spice1Oppdrag.forEach(function (link) {
		link.style.display = filterSpiceKrydret.checked ? "grid" : "none";
	});
}
function filterSpice2() {
	let filterSpiceSmakfull = document.getElementById("filterSmakfull");
	let Spice2Oppdrag = Array.from(document.querySelectorAll("a:has(.spice2)"));
	Spice2Oppdrag.forEach(function (link) {
		link.style.display = filterSpiceSmakfull.checked ? "grid" : "none";
	});
}
function filterSpice3() {
	let filterSpiceSterk = document.getElementById("filterSterk");
	let Spice3Oppdrag = Array.from(document.querySelectorAll("a:has(.spice3)"));
	Spice3Oppdrag.forEach(function (link) {
		link.style.display = filterSpiceSterk.checked ? "grid" : "none";
	});
}
function filterSpice4() {
	let filterSpiceBrennhet = document.getElementById("filterBrennhet");
	let Spice4Oppdrag = Array.from(document.querySelectorAll("a:has(.spice4)"));
	Spice4Oppdrag.forEach(function (link) {
		link.style.display = filterSpiceBrennhet.checked ? "grid" : "none";
	});
}
function filterSpice5() {
	let filterSpiceEksploiv = document.getElementById("filterEksplosiv");
	let Spice5Oppdrag = Array.from(document.querySelectorAll("a:has(.spice5)"));
	Spice5Oppdrag.forEach(function (link) {
		link.style.display = filterSpiceEksploiv.checked ? "grid" : "none";
	});
}

/*
function handleCheckboxChange(event) {
   let checkboxes = document.querySelectorAll(".spiceCheckbox");
   checkboxes.forEach(function (checkbox) {
      if (checkbox !== event.target) {
         checkbox.checked = false;
      }
   });
   let links = document.querySelectorAll("a");
   links.forEach(function (link) {
      link.style.display = "none";
   });
   let selectedSpiceClass = event.target.className.replace("filter", "").toLowerCase();
   let selectedLinks = document.querySelectorAll(`a:has(.${selectedSpiceClass})`);
   selectedLinks.forEach(function (link) {
      link.style.display = "";
   });
}
let checkboxes = document.querySelectorAll(".spiceCheckbox");
checkboxes.forEach(function (checkbox) {
   checkbox.addEventListener("change", handleCheckboxChange);
});
checkboxes.forEach(function (checkbox) {
   checkbox.classList.add("spiceCheckbox");
});*/

class Accordion {
	constructor(el) {
		// Store the <details> element
		this.el = el;
		// Store the <summary> element
		this.summary = el.querySelector("summary");
		// Store the <div class="content"> element
		this.content = el.querySelector(".content");

		// Store the animation object (so we can cancel it if needed)
		this.animation = null;
		// Store if the element is closing
		this.isClosing = false;
		// Store if the element is expanding
		this.isExpanding = false;
		// Detect user clicks on the summary element
		this.summary.addEventListener("click", (e) => this.onClick(e));
	}

	onClick(e) {
		// Stop default behaviour from the browser
		e.preventDefault();
		// Add an overflow on the <details> to avoid content overflowing
		this.el.style.overflow = "hidden";
		// Check if the element is being closed or is already closed
		if (this.isClosing || !this.el.open) {
			this.open();
			// Check if the element is being openned or is already open
		} else if (this.isExpanding || this.el.open) {
			this.shrink();
		}
	}

	shrink() {
		// Set the element as "being closed"
		this.isClosing = true;

		// Store the current height of the element
		const startHeight = `${this.el.offsetHeight}px`;
		// Calculate the height of the summary
		const endHeight = `${this.summary.offsetHeight}px`;

		// If there is already an animation running
		if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		}

		// Start a WAAPI animation
		this.animation = this.el.animate(
			{
				// Set the keyframes from the startHeight to endHeight
				height: [startHeight, endHeight],
			},
			{
				duration: 400,
				easing: "ease-out",
			}
		);

		// When the animation is complete, call onAnimationFinish()
		this.animation.onfinish = () => this.onAnimationFinish(false);
		// If the animation is cancelled, isClosing variable is set to false
		this.animation.oncancel = () => (this.isClosing = false);
	}

	open() {
		// Apply a fixed height on the element
		this.el.style.height = `${this.el.offsetHeight}px`;
		// Force the [open] attribute on the details element
		this.el.open = true;
		// Wait for the next frame to call the expand function
		window.requestAnimationFrame(() => this.expand());
	}

	expand() {
		// Set the element as "being expanding"
		this.isExpanding = true;
		// Get the current fixed height of the element
		const startHeight = `${this.el.offsetHeight}px`;
		// Calculate the open height of the element (summary height + content height)
		const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

		// If there is already an animation running
		if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		}

		// Start a WAAPI animation
		this.animation = this.el.animate(
			{
				// Set the keyframes from the startHeight to endHeight
				height: [startHeight, endHeight],
			},
			{
				duration: 400,
				easing: "ease-out",
			}
		);
		// When the animation is complete, call onAnimationFinish()
		this.animation.onfinish = () => this.onAnimationFinish(true);
		// If the animation is cancelled, isExpanding variable is set to false
		this.animation.oncancel = () => (this.isExpanding = false);
	}

	onAnimationFinish(open) {
		// Set the open attribute based on the parameter
		this.el.open = open;
		// Clear the stored animation
		this.animation = null;
		// Reset isClosing & isExpanding
		this.isClosing = false;
		this.isExpanding = false;
		// Remove the overflow hidden and the fixed height
		this.el.style.height = this.el.style.overflow = "";
	}
}

document.querySelectorAll("details").forEach((el) => {
	new Accordion(el);
});

window.onload = function checkFilter() {
	document.getElementById("filterVg1").checked = true;
	document.getElementById("filterTrinn").checked = true;
	document.getElementById("filterNoytral").checked = true;
	document.getElementById("filterKrydret").checked = true;
	document.getElementById("filterSmakfull").checked = true;
	document.getElementById("filterSterk").checked = true;
	document.getElementById("filterBrennhet").checked = true;
	document.getElementById("filterEksplosiv").checked = true;
	filterVg2Input();
	filterVg1Input();
	filterKlasseInput();
	filterVarsel();
	filterBeskrivelseInput();
	filterSpice0();
	filterSpice1();
	filterSpice2();
	filterSpice3();
	filterSpice4();
	filterSpice5();
};
