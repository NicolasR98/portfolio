const navbar = document.querySelector(".navbar");
const navLinkWrapper = navbar.querySelector(".nav_links");
const btnHamburguer = navbar.querySelector(".hamburguer");
const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const projectImg = project.querySelector(".project_img");
  const projectLinksContainer = project.querySelector(
    ".project_links_container"
  );
  const linksWrapper = project.querySelector(".links_wrapper");
  projectImg.addEventListener("touchstart", (e) => {
    projectImg.classList.add("active");
    projectLinksContainer.classList.add("active");
  });
  linksWrapper.addEventListener("touchstart", (e) => {
    projectImg.classList.remove("active");
    projectLinksContainer.classList.remove("active");
  });
  projectImg.addEventListener("mouseenter", (e) => {
    projectImg.classList.add("active");
    projectLinksContainer.classList.add("active");
  });
  linksWrapper.addEventListener("mouseleave", (e) => {
    projectImg.classList.remove("active");
    projectLinksContainer.classList.remove("active");
  });
});

const displayNavbar = () => {
  navbar.classList.toggle("active");
  btnHamburguer.classList.toggle("active");
  navLinkWrapper.classList.toggle("active");
  console.log("click!");
};

btnHamburguer.addEventListener("click", displayNavbar);
