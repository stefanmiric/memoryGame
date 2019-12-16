const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserControllers');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded( {extended : true} ));

UserController.registerRouts(app);

app.listen(PORT, () => console.log(`API is listening on port : ${PORT}`));