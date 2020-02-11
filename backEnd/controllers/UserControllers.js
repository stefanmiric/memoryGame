const util = require('util');
const MongoDBService = require('../dbservices/services');

  
class UserController{
      
    constructor(request, response){
        this.request = request;
        this.response = response;

        this.mongoDBService = new MongoDBService('mongodb://root:example@localhost:27017', 'MongoBase');
    }

    static registerRouts(app){
        app.get('/users', (request, response) => {
            new UserController(request, response).getUsers();
        });
    }

    async getUsers(){
        console.log("usli u getusers");
        await this.mongoDBService.connect();
        let users = await this.mongoDBService.find('users');
        console.log(users);
        this.response.send(users);
        this.mongoDBService.disconnect();

    }

}

module.exports = UserController;

