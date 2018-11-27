const graphql = require('graphql');

const { GraphQLObjectType, GraphQLID, GraphQLString} = graphql;

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: {type: GraphQLID },
        name: { type: GraphQLString },
        contact: {
            linkedin: { type: GraphQLString },
            twitter: { type: GraphQLString }
        }
    })
});

module.exports = PersonType;