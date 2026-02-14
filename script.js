const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      section.classList.add("show");

      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}
