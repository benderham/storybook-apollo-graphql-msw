import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

type MockApolloClientProps = {
  children: React.ReactElement;
};

const client = new ApolloClient({
  uri: '//fake.gql.server',
  cache: new InMemoryCache(),
});

export const MockApolloClient = ({ children }: MockApolloClientProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
