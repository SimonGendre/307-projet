/*
   But :    coordonner les differents fichiers JS pour le bon fonctionnement du site
   Auteur : Simon Gendre
   Date :   06.06.2023 / V1.0 
*/

// Attend la fin du chargement de la page
$().ready(function () {
  ctrl = new Ctrl();
  vue = new VueCtrl();
  ipGet = new ipGetter();
  rmtData = new remoteData();
  httpServ = new HttpServ();
  mapCtrl = new MapCtrl();
  ctrl.start();
});

class Ctrl {
  ip = null;
  lon = null;
  lat = null;
  constructor() {}

  /**
   * cette méthode s'occupe de :
   * -recuperer et afficher l'IP du client et ses coordonnées
   * -ajouter les coordonnées à la liste de coordonnées en ligne
   */
  start() {
    this.ip = httpServ.getIP();
    let coordonnees = httpServ.getLocalisation(this.ip);
    this.lat = coordonnees.split(",")[0];
    this.lon = coordonnees.split(",")[1];
    httpServ.addData(this.lon, this.lat, this.ip);

  }
}
