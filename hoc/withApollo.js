/* eslint-disable react/display-name */
import React from 'react';
import withApollo from 'next-with-apollo';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { ApolloProvider } from '@apollo/react-hooks';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: `${process.env.HOST}/graphql`,
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
