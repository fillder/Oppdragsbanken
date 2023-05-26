const siteHierarchy = {
   "/index.html": {
      displayName: "Hjem",
      iconClass: "maskeOppdragsbankOutline",
      children: {
         "/oppdragsbank/1_grafisk-design.html": {
            displayName: "1. Grafisk design",
            iconClass: "maskeGrafiskOutline",
            children: {
               "/oppdragsbank/1_grafisk-design/1-1-1_illustrator-pen-tool.html": { displayName: "Illustrator: Pen tool" },
               "/oppdragsbank/1_grafisk-design/1-2-1_produkt-etter-manualen.html": { displayName: "Produkt etter manualen" },
               "/oppdragsbank/1_grafisk-design/1-2-2_serie-etter-manualen.html": { displayName: "Serie etter manualen" },
               "/oppdragsbank/1_grafisk-design/1-2-3_fiktiv-virksomhet.html": { displayName: "Fiktiv virksomhet" },
               "/oppdragsbank/1_grafisk-design/1-1-2_deg-selv-i-vektor.html": { displayName: "Deg selv i vektor" },
               "/oppdragsbank/1_grafisk-design/1-2-4_im-i-vektor.html": { displayName: "IM-lærerne i vektor" },
            },
         },
         "/oppdragsbank/2_3d-design.html": {
            displayName: "2. 3D-design",
            iconClass: "maskeTreDOutline",
            children: {
               "/oppdragsbank/2_3d-design/2-1-1_blenderkurs.html": { displayName: "Lær å bruke Blender" },
               "/oppdragsbank/2_3d-design/2-2-1_modeller-spillobjekt.html": { displayName: "Modeller et spillobjekt" },
               "/oppdragsbank/2_3d-design/2-2-2_produktdesign.html": { displayName: "Produktdesign: PC-kabinett" },
            },
         },
         "/oppdragsbank/3_fotografi.html": {
            displayName: "3. Fotografi",
            iconClass: "maskeFotoOutline",
            children: {
               "/oppdragsbank/3_fotografi/3-1-1_naturens-barn.html": { displayName: "Naturens barn" },
               "/oppdragsbank/3_fotografi/3-2-1_filmplakat.html": { displayName: "Filmplakat" },
               "/oppdragsbank/3_fotografi/3-2-2_gatefoto.html": { displayName: "Gatefoto" },
            },
         },
         "/oppdragsbank/4_film-og-vfx.html": {
            displayName: "4. Film og VFX",
            iconClass: "maskeFilmOutline",
            children: {
               "/oppdragsbank/4_film-og-vfx/4-2-1_supersmooth-reklamefilm.html": { displayName: "Reklamefilm" },
               "/oppdragsbank/4_film-og-vfx/4-2-2_manus123.html": { displayName: "Manus 1-2-3" },
               "/oppdragsbank/4_film-og-vfx/4-2-3_konkurranserprodukt.html": { displayName: "Filmkonkurranse" },
               "/oppdragsbank/4_film-og-vfx/4-1-1_verdensrommet-animert.html": { displayName: "Verdensrommet Animert" },
            },
         },
         "/oppdragsbank/5_animasjon.html": {
            displayName: "5. Animasjon",
            iconClass: "maskeAnimasjon",
            children: {
               "/oppdragsbank/5_animasjon/5-2-1_tine-animasjon.html": { displayName: "Litagoreklame" },
               "/oppdragsbank/5_animasjon/5-1-1_walkcycle.html": { displayName: "Walk cycle" },
            },
         },
         "/oppdragsbank/6_lyddesign.html": {
            displayName: "6. Lyddesign",
            iconClass: "maskeLydOutline",
            children: {
               "/oppdragsbank/6_lyddesign/6-2-1_im-podcast.html": { displayName: "IM-Podkast" },
               "/oppdragsbank/6_lyddesign/6-2-2_musicless-music-video.html": { displayName: "Musicless music video" },
               "/oppdragsbank/6_lyddesign/6-1-1_analyse-av-lyd-i-film.html": { displayName: "Analyse av lyd i film" },
            },
         },
         "/oppdragsbank/7_drift.html": {
            displayName: "7. Drift",
            iconClass: "maskeDriftOutline",
            children: {
               "/oppdragsbank/7_drift/7-2-1_burp-suite.html": { displayName: "Burp Suite" },
               "/oppdragsbank/7_drift/7-2-2_bash-script.html": { displayName: "Bash Script" },
               // ...
            },
         },
         "/oppdragsbank/8_programmering.html": {
            displayName: "8. Programmering",
            iconClass: "maskeUtviklingOutline",
            children: {
               "/oppdragsbank/8_programmering/8-2-1_pihole-blokade.html": { displayName: "PiHole Blokade" },
            },
         },
         "/oppdragsbank/9_webutvikling.html": {
            displayName: "9. Webutvikling",
            iconClass: "maskeWebOutline",
            children: {
               "/oppdragsbank/9_webutvikling/9-2-1_reklamefilmnettside.html": { displayName: "Reklamefilmnettside" },
               "/oppdragsbank/9_webutvikling/9-2-2_kantinenettside.html": { displayName: "Kantinenettside" },
               "/oppdragsbank/9_webutvikling/9-2-3_kantinemeny.html": { displayName: "Kantinemeny" },
               "/oppdragsbank/9_webutvikling/9-2-4_abstrakt-kunst.html": { displayName: "Abstrakt kunst" },
               "/oppdragsbank/9_webutvikling/9-2-6_datamattebase.html": { displayName: "Datamattebase" },
            },
         },
         "/oppdragsbank/10_ai-systemer.html": {
            displayName: "10. AI-systemer",
            iconClass: "maskeAiOutline",
            children: {
               "/oppdragsbank/10_ai-systemer/10-1-1_stable-diffusion.html": { displayName: "Lær å Bruke SD" },
            },
         },
         "/oppdragsbank/visuell-logg.html": {
            displayName: "Visuell logg",
            iconClass: "maskeLoggOutline",
         },
      },
   },
};

function generateBreadcrumbs() {
   const currentPath = window.location.pathname; // Henter gjeldende nettadresse
   const breadcrumbsList = document.getElementById("breadcrumbs"); // Henter breadcrumbs-listeelementet

   // Funksjon for å finne stien til gjeldende side i siteHierarchy
   function findPathInHierarchy(hierarchy, currentPath, path = []) {
      for (const [key, value] of Object.entries(hierarchy)) {
         const newPath = [...path, { displayName: value.displayName, url: key }];
         if (key === currentPath) {
            return newPath;
         }
         if (value.children) {
            const result = findPathInHierarchy(value.children, currentPath, newPath);
            if (result) return result;
         }
      }
      return null;
   }

   // Kaller funksjonen for å finne stien til gjeldende side
   const path = findPathInHierarchy(siteHierarchy, currentPath);

   if (!path) return; // Avbryter hvis stien ikke ble funnet

   // Genererer liste-elementer for brødsmulene
   path.forEach((item, index) => {
      const listItem = document.createElement("li");
      if (index < path.length - 1) {
         // Hvis det ikke er det siste elementet, opprett en lenke
         const link = document.createElement("a");
         link.href = item.url;
         link.textContent = item.displayName;
         listItem.appendChild(link);
      } else {
         // Hvis det er det siste elementet, viser det som tekst
         listItem.textContent = item.displayName;
      }
      breadcrumbsList.appendChild(listItem);
   });

   // Funksjon for å oppdatere visningen av liste-elementene basert på vindusbredden
   function updateBreadcrumbsVisibility() {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 600) {
         const listItems = breadcrumbsList.getElementsByTagName("li");
         for (let i = 0; i < listItems.length - 3; i++) {
            listItems[i].style.display = "none";
         }
      } else {
         const listItems = breadcrumbsList.getElementsByTagName("li");
         for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "list-item";
         }
      }
   }
   // Kaller funksjonen for å oppdatere visningen av liste-elementene
   updateBreadcrumbsVisibility();

   // Legger til en event listener for å oppdatere visningen når vindusstørrelsen endres
   window.addEventListener("resize", updateBreadcrumbsVisibility);
}

// Kaller funksjonen for å generere brødsmulemenyen
generateBreadcrumbs();

document.addEventListener("DOMContentLoaded", function () {
   function generateMainMenu() {
      const mainMenu = document.getElementById("mainMenu");

      function createMenuItem(displayName, url, iconClass) {
         const listItem = document.createElement("li");
         const link = document.createElement("a");
         link.href = url;
         link.classList.add("hovedmenyLenke");

         if (iconClass) {
            const iconWrapper = document.createElement("div");
            iconWrapper.classList.add("hovedmenyIkon");

            const icon = document.createElement("div");
            icon.classList.add("ikonStr", iconClass, "fargetFyll");

            iconWrapper.appendChild(icon);
            link.appendChild(iconWrapper);
         }

         const text = document.createTextNode(displayName);
         link.appendChild(text);

         listItem.appendChild(link);
         return listItem;
      }

      function createSubMenu(children) {
         const subMenu = document.createElement("ul");
         for (const [url, value] of Object.entries(children)) {
            const listItem = createMenuItem(value.displayName, url, value.iconClass);
            subMenu.appendChild(listItem);
         }
         return subMenu;
      }

      // Legger til "Hjem"-elementet i menyen
      const homeMenuItem = createMenuItem(siteHierarchy["/index.html"].displayName, "/index.html", siteHierarchy["/index.html"].iconClass);
      mainMenu.appendChild(homeMenuItem);

      // Legger til resten av elementene i menyen
      for (const [url, value] of Object.entries(siteHierarchy["/index.html"].children)) {
         const menuItem = createMenuItem(value.displayName, url, value.iconClass);
         mainMenu.appendChild(menuItem);

         if (url === "/oppdragsbank.html" && value.children) {
            const subMenu = createSubMenu(value.children);
            menuItem.appendChild(subMenu);
         }
      }
   }

   generateMainMenu();
});
