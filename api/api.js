const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();
//appel a use() 
app.use('/api/v1', v1);

//GET 
v1.get('/people',  (request, response) => {
    try {
        const people = peopleService.getPeople(request.query);
         response.send(people);
    } catch (error) {
        response.sendStatus(400);
    }
});

// To be implemented!

module.exports = app;
