const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

/* Animation on view */
const observer = new IntersectionObserver(
  entries => {
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
    threshold: 0.25
  }
);

sections.forEach(section => observer.observe(section));

/* Dark Mode */
function toggleTheme() {
  document.body.classList.toggle("dark");
}
