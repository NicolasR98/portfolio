const navbar = document.querySelector(".navbar");
const navLinkWrapper = navbar.querySelector(".nav_links");
const btnHamburguer = navbar.querySelector(".hamburguer");

const displayNavbar = () => {
  navbar.classList.toggle("active");
  btnHamburguer.classList.toggle("active");
  navLinkWrapper.classList.toggle("active");
  console.log("click!");
};

btnHamburguer.addEventListener("click", displayNavbar);
