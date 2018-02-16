import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const API_URI = 'http://localhost:4000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: API_URI }),
  cache: new InMemoryCache()
});

export default client;
