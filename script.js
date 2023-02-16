const objet = document.getElementById('objet');
const demandeRenseignement = document.getElementById('demande_renseignement');
const demandeReservation = document.getElementById('demande_reservation');

objet.addEventListener('change', (event) => {
  if (event.target.value === 'demande_de_renseignement') {
    demandeRenseignement.classList.remove('hidden');
    demandeReservation.classList.add('hidden');
  } else if (event.target.value === 'demande_de_reservation') {
    demandeReservation.classList.remove('hidden');
    demandeRenseignement.classList.add('hidden');
  } else {
    demandeRenseignement.classList.add('hidden');
    demandeReservation.classList.add('hidden');
  }
});
