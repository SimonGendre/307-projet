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
  ipGet = new ipGetter();
  rmtData = new remoteData();
  ctrl.start();
  markers = {};
});

class Ctrl {
  constructor() {}
  start() {
    this.getIP();
  }

  getIP() {
    ipGet.getIP((data) => {
      $("#ip").val(data.ip);
      ipGet.getLocalisation(data.ip, this.OK, this.KO);

    }, this.KO);
  }
//todo
  generateWriteJson(){
    rmtData.getJson(((data)=>{
      
      let lon =  $("#lon").val();
      let lat =  $("#lat").val();
      markers += "lat:"+ lat +", lon:" + lon;
      ()=>{
        rmtData.setJson(markers, this.OK, this.KO);
      };
    }),this.KO);
  }

  KO(xhr) {
    let erreur = xhr.status + ": " + xhr.statusText;
    alert("Quelque-chose s'est mal passé - veulliez recharger la page - " + erreur);
  }

  OK(data) {
    // Afficher les données dans le formulaire
    $("#lon").val(data.lon);
    $("#lat").val(data.lat);
  }


}
