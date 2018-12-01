const graphql = require('graphql');

const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLID, } = graphql;

const { AuthorType, BookType }  = require('./DemoTypes');

const BookController = require('./../controller/book-controller');
const AuthorController = require('./../controller/author-controller');

const DemoQuery = new GraphQLObjectType({
    name: 'DemoQueryType',
    fields: {
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return BookController.findBooks();
            }
        },
        book:{
            type: BookType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                return BookController.findBookById(args.id);
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                return AuthorController.findAuthors();
            }
        },
        author:{
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                return AuthorController.findAuthorById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: DemoQuery
});