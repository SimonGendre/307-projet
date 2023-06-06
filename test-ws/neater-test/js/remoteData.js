class remoteData {
  constructor() {}
    /**
     *  cette méthode permet d'écrire des données dans un api afin de les récuperer plus tard
     * @param {*} jsonStr json à écrire dans l'api
     * @param {*} successCallback 
     * @param {*} errorCallback 
     */
  setJson(jsonStr, successCallback, errorCallback) {
    let url = "https://json.extendsclass.com/bin/2b01ad33529d";

    // envoi de la requête
    $.ajax(url, {
      type: "PUT",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      data: jsonStr,
      param: "api_key:WfG3urZ02tnoO2so3f3nBdMULWRNlYTpO9zC7b1m",
      success: successCallback,
      error: errorCallback,
    });
  }
  /**
   * cette méthode va lire les données de l'api 
   * @param {*} successCallback 
   * @param {*} errorCallback 
   */
  getJson(successCallback, errorCallback) {
    let url = "https://json.extendsclass.com/bin/2b01ad33529d";
    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallback,
      error: errorCallback,
    });
  }
}
