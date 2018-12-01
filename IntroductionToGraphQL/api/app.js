const express = require('express');
const DemoSchema = require('./graphQLSchema/DemoSchema');
const GraphQLHTTP = require('express-graphql');
const app = express();

app.use('/graphql/demo', GraphQLHTTP({
    schema: DemoSchema,
    graphiql: true
}));

module.exports = app;