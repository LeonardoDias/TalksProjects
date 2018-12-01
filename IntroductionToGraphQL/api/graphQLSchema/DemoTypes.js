const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList} = graphql;

const AuthorController = require('../controller/author-controller');

const BookController = require('../controller/book-controller');

const BookType = new GraphQLObjectType({
    name: 'BookType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        year: { type: GraphQLInt },
        author: { 
            type: AuthorType,
            resolve(parent, args){
                return AuthorController.findAuthorById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        books: { 
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return BookController.findBooksByAuthor(parent.id);
            }
        }
    })
});

module.exports = { AuthorType, BookType };