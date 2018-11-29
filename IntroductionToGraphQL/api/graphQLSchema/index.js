const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLList } = graphql;
const CustomFilmType = require('./filmType');
const CustomPersonType = require('./personType');
const FilmController = require('./../controller/film-controller');
const PersonController = require('./../controller/person-controller');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        films: {
            type: new GraphQLList(CustomFilmType),
            resolve(parent, args){
                return FilmController.find();
            }
        }
    }
});


const GDGQuery = new GraphQLObjectType({
    name: 'GDGQueryType',
    fields: {
        people: {
            type: new GraphQLList(CustomPersonType),
            resolve(parent, args){
                return PersonController.find();
            }
        }
    }
});

const GDGSchema = new GraphQLSchema({
    query: GDGQuery
});

const RootSchema = new GraphQLSchema({
    query: RootQuery
});


module.exports = {
    GDGSchema,
    RootSchema
}