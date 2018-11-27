const events = require('./events');
const groups = require('./groups');
const people = require('./people');
const places = require('./places');

module.exports = function findEvents(){
    return events
}

module.exports = function findGroups(){
    return groups
}

module.exports = function findPeople(){
    return people
}

module.exports = function findPlaces(){
    return places
}