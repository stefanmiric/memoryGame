import axios from "axios";

class EntriesApi {
  config = {
    baseURL: "http://localhost",
    port: 5000
  };
  constructor() {
    this.httpClient = axios.create({
      baseURL: `${this.config.baseURL}:${this.config.port}`
    });
  }

  getEntries() {
    console.log("usao u geetEntries");
    return this.httpClient
      .get("/users")
      .then(response => {
        console.log("response sa baze")
        console.log(response)
        return response.data
      }
      )
      .catch(error => {console.log(error)
      return [{name : "stefan", difficulty : "hard", time : "00:24"},{ name: "matija", difficulty : "easy", time : "01:30"}] });
  }
}
export default new EntriesApi();
