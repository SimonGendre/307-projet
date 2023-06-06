/*
   But :    exerice 18 : Webservice
   Auteur : Simon Gendre
   Date :   05.06.2023 / V1.0 
*/

// Attend la fin du chargement de la page
$().ready(function () {
  ctrl = new Ctrl();
  httpServ = new HttpServ();
  ctrl.getIP();
});

class Ctrl {
  constructor() {}

  getIP() {
    // Lire les degrés du formulaire
    let degres = $("#celsius1").val();

    httpServ.getIP(
      degres,
      this.OK,
      this.KO
    );
  }

  KO(xhr) {
    let erreur = xhr.status + ": " + xhr.statusText;
    alert("Erreur - " + erreur);
  }

  OK(data) {
    // Afficher les degrés dans le formulaire
    $("#fahrenheit1").val(data.ip);
  }
}
