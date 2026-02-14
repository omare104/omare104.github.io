function showSection(id, element) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".nav-link").click();
});
