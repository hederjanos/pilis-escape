let isMenuOpen = false;

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  isMenuOpen = !isMenuOpen;

  if (window.innerWidth < 1024) {
    menu.classList.toggle("open", isMenuOpen);
    hamburger.setAttribute("aria-expanded", String(isMenuOpen));
  }
}

function resetMenuOnResize() {
  const menu = document.getElementById("navMenu");
  const hamburger = document.querySelector(".hamburger");

  if (window.innerWidth >= 1024) {
    menu.classList.remove("open");
    menu.style.display = "";
    hamburger.setAttribute("aria-expanded", "true");
  } else {
    menu.classList.toggle("open", isMenuOpen);
    hamburger.setAttribute("aria-expanded", String(isMenuOpen));
  }
}

function highlightCurrentMenu() {
  const currentPage = location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".nav-menu a");

  menuLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || href === "" || href === "./" || href === "/") {
      link.classList.add("highlighted");
    }
  });
}

function toggleAccessibility() {
  document.documentElement.classList.toggle("accessible");
  localStorage.setItem(
    "accessibleMode",
    document.documentElement.classList.contains("accessible")
  );
}

function restoreAccessibilitySetting() {
  if (localStorage.getItem("accessibleMode") === "true") {
    document.documentElement.classList.add("accessible");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  resetMenuOnResize();
  highlightCurrentMenu();
  restoreAccessibilitySetting();
});

window.addEventListener("resize", resetMenuOnResize);
