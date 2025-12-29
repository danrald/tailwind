const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const toggle = document.getElementById("sidebarToggle");
const backdrop = document.getElementById("backdrop");

const DESKTOP = window.matchMedia("(min-width: 1024px)");

let sidebarOpen;

function setInitialState() {
  sidebarOpen = DESKTOP.matches;
  applyLayout();
}

function applyLayout() {
  if (sidebarOpen) {
    sidebar.style.transform = "translateX(0)";
    toggle.setAttribute("aria-expanded", "true");

    if (DESKTOP.matches) {
      main.style.marginLeft = "16rem";
      backdrop.classList.add("opacity-0", "pointer-events-none");
    } else {
      main.style.marginLeft = "0";
      backdrop.classList.remove("opacity-0", "pointer-events-none");
    }

  } else {
    sidebar.style.transform = "translateX(-100%)";
    toggle.setAttribute("aria-expanded", "false");

    main.style.marginLeft = "0";
    backdrop.classList.add("opacity-0", "pointer-events-none");
  }
}

toggle.addEventListener("click", () => {
  sidebarOpen = !sidebarOpen;
  applyLayout();
});

backdrop.addEventListener("click", () => {
  sidebarOpen = false;
  applyLayout();
});

DESKTOP.addEventListener("change", () => {
  sidebarOpen = DESKTOP.matches;
  applyLayout();
});

setInitialState();
