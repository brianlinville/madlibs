const path = require('path');
const { getStoryAPI, getStoryP1, getStoryP2, getStoryAdvice, getCharCodes } = require('../models/madlibs');
const { app } = require('../app');

module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index');
    });
    app.post('/api', function(req, res){
        console.log(req.body);
        res.send(getStoryAPI(getCharCodes(req.body.inputName, req.body.inputAge), req.body.inputName));
    });
    app.post('/results', function(req, res){
        const StoryP1 = getStoryP1(getCharCodes(req.body.inputName, req.body.inputAge), req.body.inputName);
        const StoryP2 = getStoryP2(getCharCodes(req.body.inputName, req.body.inputAge), req.body.inputName);
        const StoryP3 = getStoryAdvice(getCharCodes(req.body.inputName, req.body.inputAge), req.body.inputName);
        res.render('results', {p1: StoryP1, p2: StoryP2, p3: StoryP3});
        console.log('Got body:', req.body);
    });
};