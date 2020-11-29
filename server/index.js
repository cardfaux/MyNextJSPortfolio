const express = require('express');
const next = require('next');
const chalk = require('chalk');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// graphQL Resolvers
const { portfolioResolvers } = require('./graphql/resolvers');

// graphQL Types
const { portfolioTypes } = require('./graphql/types');

app.prepare().then(() => {
  const server = express();

  // Construct a schema, using GRAPHQL schema language
  // _id: ID! the ! means it can not be null
  const MyGraphQLSchema = buildSchema(`
    ${portfolioTypes}
      type Query {
        hello: String
        portfolio(id: ID): Porfolio
        portfolios: [Porfolio]
      }
  `);

  // The root provides a resolver for each API endpoint
  const root = {
    ...portfolioResolvers,
  };

  server.use(
    '/graphql',
    graphqlHTTP({
      schema: MyGraphQLSchema,
      rootValue: root,
      graphiql: true,
    })
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (error) => {
    if (error) throw error;

    console.log(chalk.bgCyanBright.magentaBright(`> Ready on http://localhost:${port}`));
    console.log(chalk.bgMagentaBright.cyanBright(`> graphiQL is Ready on http://localhost:${port}/graphql`));
  });
});
