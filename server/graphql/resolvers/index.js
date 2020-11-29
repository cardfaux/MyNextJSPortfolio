const { portfolioDummyData } = require('../dummyData');

const data = {
  ...portfolioDummyData,
};

exports.portfolioResolvers = {
  hello: () => {
    return 'Hello World!';
  },
  portfolio: (args) => {
    const portfolio = data.portfolios.find((portfolio) => {
      return portfolio._id === args.id;
    });
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios;
  },
  createPortfolio: ({ input }) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = { ...input };
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
};
