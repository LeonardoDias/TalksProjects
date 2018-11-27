const express = require('express');
const routes = require('./routes');
const rootQuery = require('./graphQLModel');
const GraphQLHTTP = require('express-graphql');
const app = express();

console.log(rootQuery);

app.use('/graphql',GraphQLHTTP({
    rootQuery,
    graphiql: true
}));

app.use('/', routes);

module.exports = app;