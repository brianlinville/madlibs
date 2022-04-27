const { getStoryP1, getStoryP2, getStoryAdvice, getCharCodes } = require('./models/madlibs');
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const http = require('http');
var url = require('url');
app.use(express.json());
const router = express.Router();
const controller = require('./controllers/controller');


controller(app);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", 'ejs');



app.listen(8000);