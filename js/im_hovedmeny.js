document.addEventListener("DOMContentLoaded", function () {
	let lastScrollTop = 0;
	let isMenuOpen = false;
	const nav = document.querySelector("nav");
	const breadcrumbs = document.querySelector(".breadcrumbsMenu");
	const menyKnapp = document.querySelector(".maskeMenyOutline");
	const overlayMeny = document.querySelector(".overlayMeny");
	const hovedmenyRamme = document.querySelector(".hovedmenyRamme");
	const main = document.querySelector("main");

	function closeMenu() {
		overlayMeny.style.opacity = "0";
		setTimeout(() => {
			overlayMeny.style.display = "none";
		}, 300);
		menyKnapp.classList.remove("maskeMenyFill");
		menyKnapp.classList.add("maskeMenyOutline");
		hovedmenyRamme.style.transform = "translateX(100%)";
		main.classList.remove("no-scroll");
		isMenuOpen = false;
	}

	menyKnapp.addEventListener("click", function () {
		if (overlayMeny.style.opacity === "1") {
			closeMenu();
		} else {
			overlayMeny.style.display = "flex";
			setTimeout(() => {
				overlayMeny.style.opacity = "1";
			}, 0);
			menyKnapp.classList.remove("maskeMenyOutline");
			menyKnapp.classList.add("maskeMenyFill");
			hovedmenyRamme.style.transform = "translateX(0%)";
			main.classList.add("no-scroll");
			isMenuOpen = true;
		}
	});

	overlayMeny.addEventListener("click", closeMenu);

	window.addEventListener("scroll", function () {
		const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if (currentScrollTop > lastScrollTop) {
			// Brukeren scroller nedover
			if (!isMenuOpen) {
				// Legg til denne linjen
				nav.classList.add("hide-nav");
				breadcrumbs.classList.add("hide-breadcrumbs");
			}
		} else {
			// Brukeren scroller oppover
			nav.classList.remove("hide-nav");
			breadcrumbs.classList.remove("hide-breadcrumbs");
		}

		lastScrollTop = currentScrollTop;
	});
});
