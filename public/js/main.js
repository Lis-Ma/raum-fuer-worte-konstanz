document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  const links = document.querySelectorAll(".main-nav a");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      nav.classList.remove("active");
    });
  });
});


console.log("Navigation script loaded.");