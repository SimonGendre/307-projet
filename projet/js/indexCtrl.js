/*
   But :    coordonner les differents fichiers JS pour le bon fonctionnement du site
   Auteur : Simon Gendre
   Date :   06.06.2023 / V1.0 
*/

// Attend la fin du chargement de la page
$().ready(function () {
    ctrl = new Ctrl();
    vue = new VueCtrl();
    mapCtrl = new MapCtrl();
});

class Ctrl {
    constructor() { }
}