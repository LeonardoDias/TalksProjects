const graphql = require('graphql');
const _ = require('lodash');
const people = require('./../models/people')

const { GraphQLObjectType, GraphQLID, GraphQLSchema} = graphql;

const PersonType = require('./personType')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        person: {
            type: PersonType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args){
                return _.find(people, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});