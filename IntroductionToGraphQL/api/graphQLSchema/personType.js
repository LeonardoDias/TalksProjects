const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString} = graphql;

module.exports = new GraphQLObjectType({
    name: 'PersonType',
    fields: () => ({
        id: {type: GraphQLID },
        name: { type: GraphQLString }
    })
});