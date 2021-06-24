const { ApolloServer} = require('apollo-server');
// create the resolvers
const resolvers=require('./resolvers/resolvers.ts');
// define the schema type definition
const typeDefs=require('./schemas/schema.graphql.ts')

// simple sample data

// define the Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });