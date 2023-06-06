class ipGetter {
  constructor() {}
  /**
   * cette méthode récupert l'Ip du client
   * @param {*} successCallback
   * @param {*} errorCallback
   */
  getIP(successCallback, errorCallback) {
    let url = "https://jsonip.com/";

    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallback,
      error: errorCallback,
    });
  }
  /**
   * cette méthode permet de récuperer l'emplacement d'une Ip passée en paramètre
   * @param {*} ip
   * @param {*} successCallback
   * @param {*} errorCallback
   */
  getLocalisation(ip, successCallback, errorCallback) {
    let url = "http://ip-api.com/json/" + ip;

    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallback,
      error: errorCallback,
    });
  }
}
