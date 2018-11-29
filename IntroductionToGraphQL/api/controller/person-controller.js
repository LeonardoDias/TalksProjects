const { findPeople } = require('../models/index')

module.exports = {
    find(){
        return findPeople();
    }
}