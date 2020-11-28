import React from 'react';
import axios from 'axios';

import PortfolioCard from '../../components/Portfolios/PortfolioCard';

const fetchPortfolios = () => {
  const query = `
    query Portfolios {
      portfolios {
        _id,
        title,
        company,
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }`;
  return (
    axios
      .post(`${process.env.HOST}/graphql`, { query: query })
      //  below calling data graph
      .then(({ data: graph }) => {
        // returning .data from graph
        return graph.data;
      })
      // getting the .data from graph.data
      .then((data) => {
        // returning the .portfolios from the data
        return data.portfolios;
      })
  );
};

// destructred portfolios from the props got from the function at the bottom
const Portfolios = ({ portfolios }) => {
  return (
    <>
      <section className='section-title'>
        <div className='px-2'>
          <div className='pt-5 pb-4'>
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className='pb-5'>
        <div className='row'>
          {portfolios.map((portfolio) => {
            return (
              <div key={portfolio._id} className='col-md-4'>
                <PortfolioCard portfolio={portfolio} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

Portfolios.getInitialProps = async () => {
  // fetchPortfolios is coming from top of the file
  const portfolios = await fetchPortfolios();
  // returning portfolios from this function that is returned from the top of the file
  return { portfolios };
};

export default Portfolios;
