document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Animate hamburger
    navMenu.classList.toggle('open');     // Toggle menu visibility
  });
});