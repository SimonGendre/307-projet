class HttpServ  {
 
    constructor(){
    }
   
    getIP(successCallback, errorCallback) {
      let url = "https://jsonip.com/";
      
   
      // envoi de la requête
      $.ajax(url, {
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallback,
        error: errorCallback
      });
    }
    getLocalisation(ip, successCallback, errorCallback) {
      let url = "http://ip-api.com/json/" + ip;
      
   
      // envoi de la requête
      $.ajax(url, {
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallback,
        error: errorCallback
      });
    }
     

    setJson(jsonStr, successCallback, errorCallback) {
      let url = "https://json.extendsclass.com/bin/2b01ad33529d";
      
   
      // envoi de la requête
      $.ajax(url, {
        type: "PUT",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: jsonStr,
        param: "api_key:WfG3urZ02tnoO2so3f3nBdMULWRNlYTpO9zC7b1m",
        success: successCallback,
        error: errorCallback
      });
    }
    getJson(successCallback, errorCallback) {
      let url = "https://json.extendsclass.com/bin/2b01ad33529d";
      // envoi de la requête
      $.ajax(url, {
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallback,
        error: errorCallback
      });
    }
  }