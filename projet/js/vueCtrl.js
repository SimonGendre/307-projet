/*
   But :    gere les parties HTML et CSS
   Auteur : Simon Gendre
   Date :   06.06.2023 / V1.0 
*/

class VueCtrl {
    constructor() {
        //definit tout les listener

        //menu
        $("#accueil").click(this.chargerVue("accueil"), null);
    }
    chargerVue(vue, callback) {

        // charger la vue demandee
        $("#view").load("views/" + vue + ".html", function () {
    
          // si une fonction de callback est spécifiée, on l'appelle ici
          if (typeof callback !== "undefined") {
            callback();
          }
    
        });
      }
}