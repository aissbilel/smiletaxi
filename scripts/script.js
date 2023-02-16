// Sélectionner tous les liens du menu de navigation
const navLinks = document.querySelectorAll('nav a');

// Ajouter un gestionnaire d'événement de clic à chaque lien
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    const sectionId = link.getAttribute('href'); // Récupérer l'identifiant de la section liée au lien
    const section = document.querySelector(sectionId); // Sélectionner la section correspondante
    const sections = document.querySelectorAll('section'); // Sélectionner toutes les sections
    sections.forEach(s => s.classList.remove('active')); // Désactiver toutes les sections
    section.classList.add('active'); // Activer la section correspondante
  });
});

// Ajouter un gestionnaire d'événement de défilement pour activer les sections au fur et à mesure qu'elles deviennent visibles
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});
