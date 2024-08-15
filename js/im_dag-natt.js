let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const DtN = () => {
	document.querySelector(".moon").classList.remove("moonAnimRev");
	document.querySelector(".moon").classList.add("moonAnim");
	const suns = document.getElementsByClassName("sun");
	for (let i = 0; i < suns.length; i++) {
		let element = suns[i];
		element.classList.remove("sunAnimRev");
		element.classList.add("sunAnim");
	}
};

const NtD = () => {
	document.querySelector(".moon").classList.remove("moonAnim");
	document.querySelector(".moon").classList.add("moonAnimRev");
	const suns = document.getElementsByClassName("sun");
	for (let i = 0; i < suns.length; i++) {
		let element = suns[i];
		element.classList.remove("sunAnim");
		element.classList.add("sunAnimRev");
	}
};

// hvis natt-modus er på, skru det av
const enableDarkMode = () => {
	// 1. legg til en class "darkmode" til body
	document.body.classList.add("darkmode");
	DtN();
	// 2. oppdater dark mode i det lokale minnet
	localStorage.setItem("darkMode", "enabled");
};
// hvis natt-modus er av, skru det på
const disableDarkMode = () => {
	// 1. fjern class "darkmode" til body
	document.body.classList.remove("darkmode");
	NtD();
	// 2. oppdater fravær av dark mode i det lokale minnet
	localStorage.setItem("darkMode", null);
};
// sjekk om natt-modus er på
if (darkMode === "enabled") {
	enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== "enabled") {
		enableDarkMode();
		// console.log(darkMode);
	} else {
		disableDarkMode();
		// console.log(darkMode);
	}
});

//Legger til animasjonsvarighet
function svgAnim() {
	//henter alle barna til elementer som har klassen .svg-anim
	document.querySelectorAll(".svg-anim *").forEach(function (element) {
		element.classList.add("animasjonstimer");
	});
}

setTimeout(svgAnim, 800);
