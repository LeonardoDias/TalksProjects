const authors = require('./../models/authors');
const _ = require('lodash');

module.exports = {
    findAuthors(){
        return authors;
    },

    findAuthorById(id){
        return _.find(authors, {'id': id});
    }
}