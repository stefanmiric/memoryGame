const util = require('util');

  
class UserController{
    constructor(request, response){
        this.request = request;
        this.response = response;
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

    getUsers(){
        this.response.send(users);
    }

    getUser(){
        let user = users.find(user => user.id === parseInt(request.params.id));
        this.response.send(user);
    }


}

module.exports = UserController;

