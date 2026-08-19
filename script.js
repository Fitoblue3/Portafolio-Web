const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('nav-menu');
const toggleIcon = document.getElementById('toggleIcon');
const navLinks = document.querySelectorAll('nav a');

// Abrir / Cerrar menú móvil
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Alterna entre la hamburguesa y la 'X' flotante
  if (navMenu.classList.contains('active')) {
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-xmark');
    toggleIcon.style.color = 'white'; // Cambia color de la X si se posa sobre el azul
  } else {
    toggleIcon.classList.remove('fa-xmark');
    toggleIcon.classList.add('fa-bars');
    toggleIcon.style.color = '#111827';
  }
});

// Cerrar menú al hacer clic en un enlace (móvil)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    toggleIcon.classList.remove('fa-xmark');
    toggleIcon.classList.add('fa-bars');
    toggleIcon.style.color = '#111827';
  });
});