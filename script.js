//Sélectionnez tous les liens de navigation avec des ancres
$('a[href*="#"]')
  //Retirer tout lien qui ne contient qu'un dièse (#)
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Empêcher le comportement de clic par défaut
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Définir la cible d'ancrage
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Vérifier si la cible d'ancrage existe
      if (target.length) {
        // Empêcher le comportement de clic par défaut
        event.preventDefault();
        // Définir la vitesse de défilement et la distance entre la cible d'ancrage et le haut de la page
        var speed = 1000; // vitesse en millisecondes
        var offset = target.offset().top;
        // Animer le défilement
        $('html, body').animate({
          scrollTop: offset
        }, speed);
      }
    }
  });
