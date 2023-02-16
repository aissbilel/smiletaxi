// Récupération des éléments HTML
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const btn = document.querySelector('.btn');

// Fonction pour animer la navigation
function animateNavigation(event) {
  event.preventDefault();

  // Récupération de l'élément cliqué
  const targetLink = event.target;
  const targetId = targetLink.getAttribute('href');

  // Animation de la navigation
  $('html, body').animate({
    scrollTop: $(targetId).offset().top
  }, 1000);
}

// Fonction pour animer les sections
function animateSections(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}

// Configuration de l'Observer pour animer les sections
const observer = new IntersectionObserver(animateSections, {
  root: null,
  threshold: 0.5
});

// Ajout de l'Observer sur chaque section
sections.forEach(section => {
  observer.observe(section);
});

// Ajout d'un événement de clic sur chaque lien de navigation
navLinks.forEach(link => {
  link.addEventListener('click', animateNavigation);
});

// Ajout d'un événement de clic sur le bouton
btn.addEventListener('click', animateNavigation);
