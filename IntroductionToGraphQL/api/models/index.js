const events = require('./events');
const groups = require('./groups');
const people = require('./people');
const places = require('./places');

module.exports = {

    findEvents(){
        return events
    },
    
    findGroups(){
        return groups
    },
    
    findPeople(){
        return people
    },
    
    findPlaces(){
        return places
    }

}