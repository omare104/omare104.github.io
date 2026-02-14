const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

/* Show sections when they enter viewport */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(`a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2 /* مهم عشان Contact تظهر */
  }
);

/* Observe all sections */
sections.forEach(section => observer.observe(section));

/* Dark / Light mode */
function toggleTheme() {
  document.body.classList.toggle("dark");
}
