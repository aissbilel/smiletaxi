// Ajoute la classe active à l'élément de menu cliqué et supprime la classe active de tous les autres éléments
function setActiveMenu(menu) {
  const menuItems = document.querySelectorAll('.menu a');
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i] === menu) {
      menuItems[i].classList.add('active');
    } else {
      menuItems[i].classList.remove('active');
    }
  }
}

// Défilement fluide vers la section correspondant au menu cliqué
function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  window.scroll({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

// Ajoute un gestionnaire d'événements click à chaque élément de menu
const menuItems = document.querySelectorAll('.menu a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function(event) {
    setActiveMenu(this);
    scrollToSection(event);
  });
}
