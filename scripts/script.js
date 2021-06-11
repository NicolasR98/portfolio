/*
==================
Selectors
==================
*/
const navbar = document.querySelector(".navbar");
const navLinkWrapper = navbar.querySelector(".nav_links");
const btnHamburguer = navbar.querySelector(".hamburguer");
const projects = document.querySelectorAll(".project");

/*
==================
Global
==================
*/
let previousScrollPos = window.pageYOffset;

/*
==================
Functions
==================
*/
const displayNavbarMenu = () => {
  navbar.classList.toggle("active");
  btnHamburguer.classList.toggle("active");
  navLinkWrapper.classList.toggle("active");
  console.log("click!");
};

const hideNavbar = () => {
  navbar.classList.add("hide");
  navbar.classList.remove("active");
  btnHamburguer.classList.remove("active");
  navLinkWrapper.classList.remove("active");
};

const showNavbar = () => {
  navbar.classList.remove("hide");
};

//Handles navbar status on scroll
const handleNavbarState = () => {
  let currentScrollPos = window.pageYOffset;

  previousScrollPos > currentScrollPos ? showNavbar() : hideNavbar();

  previousScrollPos = currentScrollPos;
};

/*
==================
Listeners
==================
*/
//For each project img, when user mouse over or touch, display links.
projects.forEach((project) => {
  const projectImg = project.querySelector(".project_img");
  const projectLinksContainer = project.querySelector(
    ".project_links_container"
  );
  const linksWrapper = project.querySelector(".links_wrapper");

  const displayProjectLinks = (e) => {
    projectImg.classList.add("active");
    projectLinksContainer.classList.add("active");
  };
  const hideProjectLinks = (e) => {
    projectImg.classList.remove("active");
    projectLinksContainer.classList.remove("active");
  };

  // Touch events
  projectImg.addEventListener("touchstart", displayProjectLinks);
  linksWrapper.addEventListener("touchstart", hideProjectLinks);

  //MOuse events
  projectImg.addEventListener("mouseenter", displayProjectLinks);
  linksWrapper.addEventListener("mouseleave", hideProjectLinks);
});

btnHamburguer.addEventListener("click", displayNavbarMenu);

window.addEventListener("scroll", handleNavbarState);
