const express = require('express');
const { RootSchema, GDGSchema } = require('./graphQLSchema');
const GraphQLHTTP = require('express-graphql');
const app = express();


app.use('/graphql/gdg',GraphQLHTTP({
    schema: GDGSchema,
    graphiql: true
}));


app.use('/graphql/article',GraphQLHTTP({
    schema: RootSchema,
    graphiql: true
}));

module.exports = app;