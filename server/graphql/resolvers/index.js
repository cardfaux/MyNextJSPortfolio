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
};
