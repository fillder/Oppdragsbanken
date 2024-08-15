document.addEventListener("DOMContentLoaded", function () {
	const deskImg = document.getElementById("deskImg");
	const mobImg = document.getElementById("mobImg");

	const openDeskImg = document.getElementById("openDeskImg");
	const openMobImg = document.getElementById("openMobImg");

	mobImg.src = deskImg.src;
	mobImg.alt = deskImg.alt;

	openDeskImg.href = deskImg.src;
	openMobImg.href = deskImg.src;

	openMobImg.target = openDeskImg.target;

	const galImg = document.getElementById("galImg");
	const openGalImg = document.getElementById("openGalImg");
	if (galImg) {
		openGalImg.href = galImg.src;
	}
});
