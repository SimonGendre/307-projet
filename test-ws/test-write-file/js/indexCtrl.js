/*
   But :    exerice 18 : Webservice
   Auteur : Simon Gendre
   Date :   05.06.2023 / V1.0 
*/

//charge des import

// Attend la fin du chargement de la page
$().ready(function () {
  ctrl = new Ctrl();
  httpServ = new HttpServ();
  ctrl.getIP();
  ctrl.getJsonRemote();
});

class Ctrl {
  constructor() {}

  getIP() {
    httpServ.getIP(this.extractIP, this.KO);
  }

  getLocalisation(ip) {
    httpServ.getLocalisation(ip, this.OK, this.KO);
  }

  extractIP(data) {
    $("#ip").val(data.ip);
    ctrl.getLocalisation(data.ip);
  }

  getJsonRemote() {
    httpServ.getJson(this.displayJson, this.KO);
  }

  KO(xhr) {
    let erreur = xhr.status + ": " + xhr.statusText;
    alert("Erreur - " + erreur);
  }

  OK(data) {
    // Afficher les degrés dans le formulaire
    $("#lon").val(data.lon);
    $("#lat").val(data.lat);

    //ecrit les données
    let json = "{lon:"+data.lon+", lat:"+data.lat+"}";

    httpServ.setJson(json, this.OK, this.KO);
  }

  displayJson(data) {
    console.log(data);
  }
}
