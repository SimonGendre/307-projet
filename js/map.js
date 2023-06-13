/**
 * cette classe gere la carte
 * 13.06.23
 */
class MapCtrl {
  mymap = null;
  constructor() {}
  /**
   * cette méthode affiche la carte
   * @param {*} mapElement l'element contenant la map ($("#carte"))
   */
  afficherCarte(mapElement) {
    // Utilisez l'élément "map" pour afficher la carte Leaflet ou effectuer d'autres opérations
    this.mymap = L.map(mapElement[0]).setView([46.802, 7.146], 13);

    // Ajouter une couche de tuiles (carte de base)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.mymap);
  }
  /**
   *
   * @param {*} lon  coordonnées du marqueur
   * @param {*} lat coordonnées du marqueur
   * @param {*} label texte du marqueur
   * @param {*} color couleur du marqueur (pas encore implémenté)
   */
  addMarker(lon, lat, label, color) {
    if (
      lon != undefined &&
      lat != undefined &&
      lon != "undefined" &&
      lat != "undefined"
    ) {
      // Ajouter un marqueur simple
      let marker = L.marker([lon, lat]).addTo(this.mymap);

      // centre la carte sur le point ajouté
      this.mymap.setView([lon, lat], 10);
      // Ajouter une info-bulle au marqueur
      marker.bindPopup(label, { offset: [0, -30] }).openPopup();
    }
  }
  /**
   * cette fonction ajoute un marqueur pour tout les points du json passé en parametre
   * le json doit avoir des valeurs de ce format :
   * lon:XXX,lat:YYY
   * @param {*} coordonnees
   */
  displayAll(coordonnees) {
    Object.keys(coordonnees).forEach(function (k) {
      if (coordonnees[k] !== undefined) {
        //recupert lon et lat
        let lon = coordonnees[k].split(",")[0].split(":")[1];
        let lat = coordonnees[k].split(",")[1].split(":")[1];
        let ip = k;

        mapCtrl.addMarker(lon, lat, ip, "green");
      }
    });
  }
}
