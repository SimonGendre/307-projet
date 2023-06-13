/**
 * 
 */
class ipGetter {
  constructor() {}
  /**
   * cette méthode récupert l'Ip du client
   */
  getIP(successCallback) {
    let url = "https://ipv4.jsonip.com/";

    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      async: false,
      success: successCallback
      
    });
  }
  /**
   * cette méthode permet de récuperer l'emplacement d'une Ip passée en paramètre
   */
  getLocalisation(ip, successCallback) {
    let url = "http://ip-api.com/json/" + ip;

    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      async: false,
      success: successCallback
      
    });
  }
}
