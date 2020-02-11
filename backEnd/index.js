const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./controllers/UserControllers');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded( {extended : true} ));
app.use(cors());

UserController.registerRouts(app);

app.listen(PORT, () => console.log(`API is listening on port : ${PORT}`));