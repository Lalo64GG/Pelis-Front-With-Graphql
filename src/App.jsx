// En tu componente React
import React from 'react';
import MyComponent from './MyComponent';
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

import MovieList from './MyComponent';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql', // URL de tu servidor GraphQL
  cache: new InMemoryCache(),
});

function App() {
  
  return (
    <ApolloProvider client={client}>
     <div>

        <MovieList/>
      </div>
  </ApolloProvider>
    
  );
}

export default App;
