const { portfolioDummyData } = require('../dummyData');

const data = {
  ...portfolioDummyData,
};

exports.portfolioQueries = {
  hello: () => {
    return 'Hello World!';
  },
  portfolio: (root, args) => {
    const portfolio = data.portfolios.find((portfolio) => {
      return portfolio._id === args.id;
    });
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios;
  },
};

exports.portfolioMutations = {
  createPortfolio: (root, { input }) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = { ...input };
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
  updatePortfolio: (root, args) => {
    const index = data.portfolios.findIndex((portfolio) => {
      return portfolio._id === args.id;
    });
    const oldPortfolio = data.portfolios[index];
    const newPortfolio = { ...oldPortfolio, ...args.input };
    data.portfolios[index] = newPortfolio;
    return newPortfolio;
  },
  deletePortfolio: (root, { id }) => {
    const index = data.portfolios.findIndex((p) => p._id === id);
    data.portfolios.splice(index, 1);
    return id;
  },
};
