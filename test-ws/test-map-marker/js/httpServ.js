class HttpServ {
  constructor() { }
  /**
   * cette méthode permet de récuperer l'ip du visiteur et de l'afficher
   */
  getIP() {
    let ip = "";
    ipGet.getIP((data) => {
      ip = data.ip;
    });
    return ip;
  }
  /**
   *  cette méthode permet de récuperer les coordonées GPS du visiteur et de les afficher
   * return coordonnes GPS "lon:XXX,lat:YYY"
   */
  getLocalisation(ip) {
    let api = "";
    ipGet.getLocalisation(ip, (data) => {
      api = data;
    });
    let retour = api.lon + "," + api.lat;
    return retour;
  }
  /**
   * cette méthode récupert le Json stocké dans un api et le returne
   */
  getStoredData() {
    let donnesDistantes = {};
    rmtData.getJson((data) => {
      donnesDistantes = data;
    });
    return JSON.parse(donnesDistantes);
  }
  /**
   * cette méthode ajoute une ligne au json en ligne
   * la ligne est :
   * ,MMJJHHmm : {lon : XXX, lat : YYY}
   */
  addData(lon, lat, ip) {
    //creation de la ligne à ajouté
    let date = new Date();
    let header =
      date.getMonth() +
      "" +
      date.getDate() +
      date.getHours() +
      date.getMinutes();
      let ipFormat = ip.replace(":", ".");
    let value = "lon:" + lon + ", lat:" + lat + ", ip:" + ipFormat;


    //ajout de la ligne
    let data = this.getStoredData();
    data[header] = value;


    //ecriture en ligne
    rmtData.setJson(JSON.stringify(data), () => { });
  }
}
