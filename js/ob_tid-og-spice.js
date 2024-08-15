document.addEventListener("DOMContentLoaded", function () {
	// Velg alle elementene med tid-klassene
	const tid1Elementer = document.querySelectorAll(".tid1");

	// Går gjennom alle elementene med tid-klassene
	for (let tid1Element of tid1Elementer) {
		// Opprett et nytt div-element
		const nyttDivElement = document.createElement("div");

		// Legg til klassene "tidIkon" og "fargetFyll" til det nye div-elementet
		nyttDivElement.classList.add("tidIkon", "maskeTid1", "fargetFyll");

		// Legg det nye div-elementet til det eksisterende tid-elementet som et barn
		tid1Element.appendChild(nyttDivElement);
	}
	const tid2Elementer = document.querySelectorAll(".tid1-3");
	for (let tid2Element of tid2Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("tidIkon", "maskeTid1-3", "fargetFyll");
		tid2Element.appendChild(nyttDivElement);
	}

	const tid3Elementer = document.querySelectorAll(".tid3-6");
	for (let tid3Element of tid3Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("tidIkon", "maskeTid3-6", "fargetFyll");
		tid3Element.appendChild(nyttDivElement);
	}

	const tid4Elementer = document.querySelectorAll(".tid6-9");
	for (let tid4Elemente of tid4Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("tidIkon", "maskeTid6-9", "fargetFyll");
		tid4Elemente.appendChild(nyttDivElement);
	}

	const tid5Elementer = document.querySelectorAll(".tid9-12");
	for (let tid5Elemente of tid5Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("tidIkon", "maskeTid9-12", "fargetFyll");
		tid5Elemente.appendChild(nyttDivElement);
	}

	const tid6Elementer = document.querySelectorAll(".tid12-15");
	for (let tid6Elemente of tid6Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("tidIkon", "maskeTid12-15", "fargetFyll");
		tid6Elemente.appendChild(nyttDivElement);
	}

	const tid7Elementer = document.querySelectorAll(".tid15");
	for (let tid7Elemente of tid7Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("tidIkon", "maskeTid15", "fargetFyll");
		tid7Elemente.appendChild(nyttDivElement);
	}

	// Spiciness graderinger
	const spice0Elementer = document.querySelectorAll(".spice0");
	for (let spice0Element of spice0Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("spiceIkon", "maskeSpice0", "fargetFyll");
		spice0Element.appendChild(nyttDivElement);
	}

	const spice1Elementer = document.querySelectorAll(".spice1");
	for (let spice1Element of spice1Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("spiceIkon", "maskeSpice1", "fargetFyll");
		spice1Element.appendChild(nyttDivElement);
	}

	const spice2Elementer = document.querySelectorAll(".spice2");
	for (let spice2Element of spice2Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("spiceIkon", "maskeSpice2", "fargetFyll");
		spice2Element.appendChild(nyttDivElement);
	}

	const spice3Elementer = document.querySelectorAll(".spice3");
	for (let spice3Element of spice3Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("spiceIkon", "maskeSpice3", "fargetFyll");
		spice3Element.appendChild(nyttDivElement);
	}

	const spice4Elementer = document.querySelectorAll(".spice4");
	for (let spice4Element of spice4Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("spiceIkon", "maskeSpice4", "fargetFyll");
		spice4Element.appendChild(nyttDivElement);
	}

	const spice5Elementer = document.querySelectorAll(".spice5");
	for (let spice5Element of spice5Elementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("spiceIkon", "maskeSpice5", "fargetFyll");
		spice5Element.appendChild(nyttDivElement);
	}

	// Definisjoner
	const intDefElementer = document.querySelectorAll(".intDef");
	for (let intDefElement of intDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "interntOppdrag");
		intDefElement.appendChild(nyttDivElement);
	}
	const eksDefElementer = document.querySelectorAll(".eksDef");
	for (let eksDefElement of eksDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "eksterntOppdrag");
		eksDefElement.appendChild(nyttDivElement);
	}
	const kursDefElementer = document.querySelectorAll(".kursDef");
	for (let kursDefElement of kursDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "kurs");
		kursDefElement.appendChild(nyttDivElement);
	}
	const kontoDefElementer = document.querySelectorAll(".kontoDef");
	for (let kontoDefElement of kontoDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "maskeKreverKonto");
		kontoDefElement.appendChild(nyttDivElement);
	}
	const utstyrDefElementer = document.querySelectorAll(".utstyrDef");
	for (let utstyrDefElement of utstyrDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "maskeKreverUtstyr");
		utstyrDefElement.appendChild(nyttDivElement);
	}
	const nedDefElementer = document.querySelectorAll(".nedDef");
	for (let nedDefElement of nedDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "maskeKreverNedlastning");
		nedDefElement.appendChild(nyttDivElement);
	}
	const ccDefElementer = document.querySelectorAll(".ccDef");
	for (let ccDefElement of ccDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "maskeCreativeCommons");
		ccDefElement.appendChild(nyttDivElement);
	}
	const progDefElementer = document.querySelectorAll(".progDef");
	for (let progDefElement of progDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "progVare");
		progDefElement.appendChild(nyttDivElement);
	}
	const fagDefElementer = document.querySelectorAll(".fagDef");
	for (let fagDefElement of fagDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "fagLitt");
		fagDefElement.appendChild(nyttDivElement);
	}
	const ixdDefElementer = document.querySelectorAll(".ixdDef");
	for (let ixdDefElement of ixdDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "interaktiv");
		ixdDefElement.appendChild(nyttDivElement);
	}
	const refDefElementer = document.querySelectorAll(".refDef");
	for (let refDefElement of refDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "refSide");
		refDefElement.appendChild(nyttDivElement);
	}
	const ressDefElementer = document.querySelectorAll(".ressDef");
	for (let ressDefElement of ressDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "maskeRessurser");
		ressDefElement.appendChild(nyttDivElement);
	}
	const spillDefElementer = document.querySelectorAll(".spillDef");
	for (let spillDefElement of spillDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "spill");
		spillDefElement.appendChild(nyttDivElement);
	}
	const playDefElementer = document.querySelectorAll(".playDef");
	for (let playDefElement of playDefElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("kravIkonStor", "video");
		playDefElement.appendChild(nyttDivElement);
	}

	// oppdragstyper
	const interntOppdragElementer = document.querySelectorAll(".interntOppdrag");
	for (let interntOppdragElement of interntOppdragElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeOppdragIntern", "fargetFyll");
		interntOppdragElement.appendChild(nyttDivElement);
	}
	const eksterntOppdragElementer = document.querySelectorAll(".eksterntOppdrag");
	for (let eksterntOppdragElement of eksterntOppdragElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeOppdragEkstern", "fargetFyll");
		eksterntOppdragElement.appendChild(nyttDivElement);
	}
	const ressursElementer = document.querySelectorAll(".ressurs");
	for (let ressursElement of ressursElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeRessurser", "fargetFyll");
		ressursElement.appendChild(nyttDivElement);
	}
	const kursElementer = document.querySelectorAll(".kurs");
	for (let kursElement of kursElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeSertifisering", "fargetFyll");
		kursElement.appendChild(nyttDivElement);
	}
	const videoElementer = document.querySelectorAll(".video");
	for (let videoElement of videoElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeVideo", "fargetFyll");
		videoElement.appendChild(nyttDivElement);
	}
	const progVareElementer = document.querySelectorAll(".progVare");
	for (let progVareElement of progVareElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeProgramvare", "fargetFyll");
		progVareElement.appendChild(nyttDivElement);
	}
	const refSideElementer = document.querySelectorAll(".refSide");
	for (let refSideElement of refSideElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeReferanse", "fargetFyll");
		refSideElement.appendChild(nyttDivElement);
	}
	const interaktivElementer = document.querySelectorAll(".interaktiv");
	for (let interaktivElement of interaktivElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeInteraktivt", "fargetFyll");
		interaktivElement.appendChild(nyttDivElement);
	}
	const spillElementer = document.querySelectorAll(".spill");
	for (let spillElement of spillElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeSpill", "fargetFyll");
		spillElement.appendChild(nyttDivElement);
	}
	const fagLittElementer = document.querySelectorAll(".fagLitt");
	for (let fagLittElement of fagLittElementer) {
		const nyttDivElement = document.createElement("div");
		nyttDivElement.classList.add("op_ikon", "maskeFaglitteratur", "fargetFyll");
		fagLittElement.appendChild(nyttDivElement);
	}
});
