document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("article").forEach((block) => {
    // Sjekk om det finnes minst ett p-element
    if (!block.querySelector("p")) {
      return; // hopp over hvis ingen <p> funnet
    }
    // Gjør <article> fokus- og tastaturvennlig
    block.setAttribute("role", "button");
    block.setAttribute("tabindex", "0");
    block.setAttribute("aria-haspopup", "dialog");
    const dialog = document.createElement("dialog");
    dialog.classList.add("undervisning-dialog");

    const innhold = document.createElement("div");
    innhold.classList.add("dialog-innhold");
    innhold.innerHTML = block.innerHTML;
    dialog.appendChild(innhold);

    const closeForm = document.createElement("form");
    closeForm.method = "dialog";
    closeForm.innerHTML = "<button id='lukk'>Lukk</button>";
    dialog.appendChild(closeForm);

    document.body.appendChild(dialog);

    const openDialog = () => dialog.showModal();
    block.addEventListener("click", openDialog);
    block.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDialog();
      }
    });

    // Lukk ved klikk på bakteppet
    dialog.addEventListener("click", (e) => {
      const padding = 16;
      const rect = dialog.querySelector(".dialog-innhold").getBoundingClientRect();
      const inDialog =
        e.clientX >= rect.left - padding && e.clientX <= rect.right + padding && e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding;

      if (!inDialog) dialog.close();
    });
  });
});
