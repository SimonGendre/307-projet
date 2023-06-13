/*
   But :    gere les parties HTML et CSS
   Auteur : Simon Gendre
   Date :   12.06.2023 / V1.0 
*/

class VueCtrl {
  constructor() {
    //definit tout les listener

    //permet de toggle le menu
    $("#siteName, #logo").click(function () {
      $("#menu").toggleClass("jqLeft", 500);
      $(".menuItem").toggleClass("hidden");
      $("#view").toggleClass("fullScreen",500)
      return false;
    });

    //menu
    $("#accueil").click(() => this.chargerVue("accueil"));
    $("#map").click(() => {
      this.chargerVue("map");
    });
    // Variable membre pour stocker la référence à l'élément "map"
    this.mapElement = null;
    //chargement de la page principale
    this.chargerVue("accueil");
  }

  chargerVue(vue) {
    // charger la vue demandee
    $("#view").load("views/" + vue + ".html", function () {
      // Vérifiez si l'élément "map" existe dans la vue chargée et que "vue" est égal à "map"
      if (vue == "map") {
        this.mapElement = $("#carte");
        if (this.mapElement.length > 0) {
          // Appeler la méthode d'une autre classe avec l'élément "map" en tant que paramètre
          mapCtrl.afficherCarte(this.mapElement);
          //affiche toutes les IP précedentes
          mapCtrl.displayAll(httpServ.getStoredData());
          //affichage du marqueur actuel
          mapCtrl.addMarker(ctrl.lon, ctrl.lat, "Vous : " + ctrl.ip, "red");
          //affichage des valeurs

          $("#lon").val(ctrl.lon);
          $("#lat").val(ctrl.lat);
          $("#ip").val(ctrl.ip);
        }
      }
    });
  }
}
