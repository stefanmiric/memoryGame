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

        app.get('/users/:id', (request, response) => {
            new UserController(request,response).getUser();
        });

        app.post('/users', (request, response) => {
            new UserController(request,response).postUsers();
        });

        app.delete('/users/:id', (request, response) => {
            new UserController(request, response).deleteUser();
        });

        app.put('/users/:id', (request, response) => {
            new UserController(request, response).putUser();
        });
    }

    async getUsers(){
        await this.mongoDBService.connect();

        let users = await this.mongoDBService.find('users');

        this.mongoDBService.disconnect();
        this.response.send(users);
    }

    async getUser(){
        await this.mongoDBService.connect();

        let user = await this.mongoDBService.findOne('users', { id : parseInt(this.request.params.id) });

        this.mongoDBService.disconnect();
        this.response.send(user);
    }
    async postUsers(){
        await this.mongoDBService.connect();

        await this.mongoDBService.insert('users', {
            id : parseInt(this.request.body.id),
            name : this.request.body.name,
            email : this.request.body.email,
            phone : this.request.body.phone
        });

        this.mongoDBService.disconnect();
        this.response.send('Success');
    }
    async putUser(){
        await this.mongoDBService.connect();

        await this.mongoDBService.update('users', { id : parseInt(this.request.params.id) }, {
            name : this.request.body.name,
            email : this.request.body.email,
            phone : this.request.body.phone
        });

        this.mongoDBService.disconnect();
        this.response.send('Success');
    }

    async deleteUser(){
        await this.mongoDBService.connect();

        await this.mongoDBService.delete('users', { id : parseInt(this.request.params.id) });

        this.mongoDBService.disconnect();
        this.response.send('Success');
    }

}

module.exports = UserController;

