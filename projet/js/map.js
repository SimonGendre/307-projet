class MapCtrl {
    mymap = "";
    constructor() {

    }
    afficherCarte(mapElement) {
        // Utilisez l'élément "map" pour afficher la carte Leaflet ou effectuer d'autres opérations
        this.mymap = L.map(mapElement[0]).setView([51.505, -0.09], 13);

        // Ajouter une couche de tuiles (carte de base)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.mymap);
    }

    addMarker(lon, lat, label, color) {
        // Ajouter un marqueur simple
        //let marker = L.marker([lon, lat]).addTo(this.mymap);

        // Créer une icône personnalisée avec la couleur spécifiée
        let customIcon = L.icon({
            iconUrl: 'img/marker-icon.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            shadowUrl: 'img/marker-shadow.png',
            shadowSize: [41, 41],
            shadowAnchor: [12, 41],
            iconColor: color // Couleur du marqueur
        });

        // Ajouter un marqueur avec l'icône personnalisée
        let marker = L.marker([lon, lat], { icon: customIcon }).addTo(this.mymap);

        // centre la carte sur le point ajouté
        this.mymap.setView([lon, lat], 10);
        // Ajouter une info-bulle au marqueur
        marker.bindPopup(label, { offset: [0, -30] }).openPopup();
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

                if ((lon != undefined) && (lat != undefined) && (lon != "undefined") && (lat != "undefined")) {
                    console.log(lon + " " + lat);
                    mapCtrl.addMarker(lon, lat, ip, "green");
                }
            }

        });
    }


}