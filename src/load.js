import loadMenu from "./menu";
import loadContact from "./contact";
import loadHome from "./home";
function activateNavItem(x) {
  const navitems = document.querySelectorAll(".navitem");
  navitems.forEach((navitem) => {
    if (navitem !== this) {
      navitem.classList.remove("selected__menu");
    }
  });

  x.classList.add("selected__menu");
}

function initializeNavBar() {
  const homeButton = document.querySelector(".homebtn");
  homeButton.addEventListener("click", () => {
    activateNavItem(homeButton);
    loadHome();
  });

  const menuButton = document.querySelector(".menubtn");
  menuButton.addEventListener("click", () => {
    activateNavItem(menuButton);
    loadMenu();
  });

  const contactButton = document.querySelector(".contactbtn");
  contactButton.addEventListener("click", () => {
    activateNavItem(contactButton);
    loadContact();
  });
}

export default initializeNavBar;
