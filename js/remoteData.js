/**
 * cette classe gere le stockage en ligne
 * 13.06.23
 */
class remoteData {
  constructor() {}

  setJson(jsonStr, successCallback) {
    let url = "https://json.extendsclass.com/bin/2b01ad33529d";

    // envoi de la requête
    $.ajax(url, {
      type: "PUT",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      data: jsonStr,
      param: "api_key:WfG3urZ02tnoO2so3f3nBdMULWRNlYTpO9zC7b1m",
      async: false,
      success: successCallback
    });
  }

  getJson(successCallback) {
    let url = "https://json.extendsclass.com/bin/2b01ad33529d";
    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      param: "api_key:WfG3urZ02tnoO2so3f3nBdMULWRNlYTpO9zC7b1m",
      async: false,
      success: successCallback
      
    });
  }
}
