const { findPeople } = require('./../models/index')

module.exports = function findAll(){
    return findPeople()
}