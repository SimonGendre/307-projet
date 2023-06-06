class HttpServ  {
 
    constructor(){
    }
   
    getIP(degres, successCallback, errorCallback) {
      let url = "https://jsonip.com/";
      
   
      // envoi de la requête
      $.ajax(url, {
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: successCallback,
        error: errorCallback
      });
    }
  }