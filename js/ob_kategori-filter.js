const visAlt = "*";
const filterButtons = document.querySelectorAll(".kategoriFilter button");
const contentItems = document.querySelectorAll(".kategoriSeksjon button, .kategoriSeksjon a");

// Filtrerer contentItems basert på filterverdien
function handleFiltering(filter) {
	contentItems.forEach((item) => {
		const filterClasses = filter.split(",").map((cls) => cls.trim());
		const itemHasFilterClass = filterClasses.some((cls) => item.classList.contains(cls.substring(1)));

		item.classList.toggle("hidden", filter !== visAlt && !itemHasFilterClass);
	});
}

// Setter en knapp som den aktive filterknappen og lagrer filterverdien i sessionStorage
function setActiveFilterButton(activeButton) {
	filterButtons.forEach((button) => {
		button.classList.remove("fargetFilter");
	});

	activeButton.classList.add("fargetFilter");
	sessionStorage.setItem("activeFilter", activeButton.getAttribute("data-filter"));
}

// Gjenoppretter den aktive filterknappen og tilhørende filtrering fra sessionStorage
function restoreActiveFilter() {
	const savedFilter = sessionStorage.getItem("activeFilter");
	const filterButton = savedFilter ? document.querySelector(`[data-filter="${savedFilter}"]`) : document.querySelector(`[data-filter="${visAlt}"]`);

	if (!filterButton) {
		console.warn(`No button found with data-filter="${savedFilter}". Falling back to the default filter.`);
		filterButton = document.querySelector(`[data-filter="${visAlt}"]`);
	}

	handleFiltering(savedFilter || visAlt);
	setActiveFilterButton(filterButton);
}

filterButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		handleFiltering(event.target.getAttribute("data-filter")); // Oppdater til å sende data-filter som argument
		setActiveFilterButton(event.target);
	});
});

restoreActiveFilter();

// DETALJERT BESKRIVELSE
// - handleFiltering(filter): Tar inn en filterverdi som argument og filtrerer contentItems basert på denne verdien. Hvis filteret er '*', vil alle elementene vises. Hvis filteret er noe annet, vil bare de elementene som inneholder filterklassene vises, og de andre elementene vil skjules.
// - setActiveFilterButton(activeButton): Tar inn en knappelement som argument og setter denne knappen som den aktive filterknappen ved å legge til 'fargetHover'-klassen. Fjerner 'fargetHover'-klassen fra alle andre filterknapper og lagrer den aktive filterverdien i sessionStorage.
// - restoreActiveFilter(): Gjenoppretter den aktive filterknappen og tilhørende filtrering fra sessionStorage når siden lastes inn. Hvis det ikke er lagret noe filter i sessionStorage, vil standardfilteret '*' bli satt som aktivt.
