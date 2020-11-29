const express = require('express');
const next = require('next');
const chalk = require('chalk');

const { ApolloServer, gql } = require('apollo-server-express');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// graphQL Resolvers
const { portfolioQueries, portfolioMutations } = require('./graphql/resolvers');

// graphQL Types
const { portfolioTypes } = require('./graphql/types');

app.prepare().then(() => {
  const server = express();

  // Construct a schema, using GRAPHQL schema language
  // _id: ID! the ! means it can not be null
  const typeDefs = gql`
    ${portfolioTypes}
    type Query {
      hello: String
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }

    type Mutation {
      createPortfolio(input: PortfolioInput): Portfolio
      updatePortfolio(id: ID, input: PortfolioInput): Portfolio
    }
  `;

  // The root provides a resolver for each API endpoint
  const resolvers = {
    Query: {
      ...portfolioQueries,
    },
    Mutation: {
      ...portfolioMutations,
    },
  };

  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.applyMiddleware({ app: server });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (error) => {
    if (error) throw error;

    console.log(chalk.bgCyanBright.magentaBright(`> Ready on http://localhost:${port}`));
    console.log(chalk.bgMagentaBright.cyanBright(`> graphQL-Playground is Ready on http://localhost:${port}/graphql`));
  });
});
