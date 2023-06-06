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

    httpServ.getIP(
      this.extractIP,
      this.KO
    );
  }
  getLocalisation(ip) {

    httpServ.getLocalisation(
      ip,
      this.OK,
      this.KO
    );
    
  }
  extractIP(data) {
    console.log("extract: "+ data.ip);
    $("#ip").val(data.ip);
    ctrl.getLocalisation(data.ip);
  }

  KO(xhr) {
    let erreur = xhr.status + ": " + xhr.statusText;
    alert("Erreur - " + erreur);
  }

  OK(data) {
    // Afficher les degrés dans le formulaire
    console.log(data);
    $("#lon").val(data.lon);
    $("#lat").val(data.lat);
  }
}
