import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

type MockApolloProviderProps = {
  children: React.ReactElement;
};

const client = new ApolloClient({
  uri: '//fake.gql.server',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

export const MockApolloProvider = ({ children }: MockApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
