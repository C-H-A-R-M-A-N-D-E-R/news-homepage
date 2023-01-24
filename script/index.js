const navMenu = () => {
  const navMenu = document.querySelector(".nav-menu");
  const primaryNav = document.querySelector(".nav-list");
  const backDrop = document.querySelector(".backdrop");
  const visibility = primaryNav.getAttribute("data-visible");
  const iconMenu = document.querySelector(".icon-menu");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    backDrop.setAttribute("data-visible", "true");
    iconMenu.src = "../images/icon-menu-close.svg";
    navMenu.style.position = "fixed";
  } else {
    primaryNav.setAttribute("data-visible", "false");
    backDrop.setAttribute("data-visible", "false");
    iconMenu.src = "../images/icon-menu.svg";
    navMenu.style.position = "absolute";
  }
};
