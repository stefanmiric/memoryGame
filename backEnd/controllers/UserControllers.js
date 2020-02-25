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

        app.post('/users', (request, response) => {
            new UserController(request,response).postUser();
        })
    }

    async getUsers(){
        await this.mongoDBService.connect();
        let users = await this.mongoDBService.find('users');
        this.response.send(users);
        this.mongoDBService.disconnect();
    }

    async postUser(){
        await this.mongoDBService.connect();

        await this.mongoDBService.insert('users', {
            name : this.request.body.name,
            difficulty : this.request.body.difficulty,
            time : this.request.body.time
        });
        
        this.mongoDBService.disconnect();
        this.response.json({ status: 'Success' });
    }

}

module.exports = UserController;

