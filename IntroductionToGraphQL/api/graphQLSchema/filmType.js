const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt} = graphql;

module.exports = new GraphQLObjectType({
    name: 'FilmType',
    fields: () => ({
        title: { type: GraphQLString},
        genre: { type: GraphQLString},
        year: { type: GraphQLInt }
    })
});