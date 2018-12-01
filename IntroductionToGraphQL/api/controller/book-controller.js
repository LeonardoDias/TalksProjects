const books = require('./../models/books');
const _ = require('lodash');

module.exports = {
    findBooks(){
        return books;
    },

    findBookById(id){
        return _.find(books, {'id': id } );
    },

    findBooksByAuthor(authorId){
        return _.filter(books, {'authorId': authorId});
    }
}