/*
   But :    exerice 18 : Webservice
   Auteur : Simon Gendre
   Date :   05.06.2023 / V1.0 
*/

// Attend la fin du chargement de la page
$().ready(function () {
  ctrl = new Ctrl();
  ipGet = new ipGetter();
  rmtData = new remoteData();
  httpServ = new HttpServ();
  mapCtrl = new MapCtrl();
  ctrl.start();
});

class Ctrl {
  constructor() { }
  /**
   * cette méthode s'occupe de :
   * -recuperer et afficher l'IP du client et ses coordonnées
   * -ajouter les coordonnées à la liste de coordonnées en ligne
   * -afficher les marqueur sur une carte
   */
  start() {
    let ip = httpServ.getIP();
    let coordonnees = httpServ.getLocalisation(ip);
    let lat = coordonnees.split(",")[0];
    let lon = coordonnees.split(",")[1];

    let data = httpServ.getStoredData();
    httpServ.addData(lon, lat, ip);
    //affichage des valeurs

    $("#lon").val(lon);
    $("#lat").val(lat);
    $("#ip").val(ip);
    


    //affiche toutes les IP précedentes 
    mapCtrl.displayAll(data);
    //affichage du marqueur actuel
    mapCtrl.addMarker(lon, lat, "Vous : " + ip, "red");


  }
}
