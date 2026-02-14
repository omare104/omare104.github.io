function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  setTimeout(() => {
    document.getElementById(id).classList.add('active');
  }, 150);
}

// default section
document.addEventListener("DOMContentLoaded", function () {
  showSection("home");
});
