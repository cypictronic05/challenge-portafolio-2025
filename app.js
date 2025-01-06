// script.js
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  // Alternar clases
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Cambiar el icono
  if (body.classList.contains('dark-theme')) {
    themeIcon.textContent = '🌙'; // Modo oscuro
    
  } else {
    themeIcon.textContent = '☀️'; // Modo claro
  }
});
