// sélectionne tous les liens de navigation
const navLinks = document.querySelectorAll('.nav-link');

// pour chaque lien, ajoute un événement de clic
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // empêche la navigation par défaut

    // récupère l'identifiant de la section cible à partir de l'attribut href
    const targetId = link.getAttribute('href').substring(1);

    // récupère la section cible en fonction de son ID
    const targetSection = document.getElementById(targetId);

    // fait défiler la page jusqu'à la section cible en douceur
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});

// sélectionne l'icône hamburger et le menu de navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// ajoute un événement de clic à l'icône hamburger
hamburger.addEventListener('click', () => {
  // bascule la classe "active" pour le menu de navigation et l'icône hamburger
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});
