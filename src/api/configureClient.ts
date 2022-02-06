import { useMemo } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const SERVER = process.env.NEXT_PUBLIC_CONTENT_DELIVERY_GRAPHQL_API;
const AccessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
const httpLink = new HttpLink({
  fetch,
  uri: SERVER,
  headers: {
    authorization: `Bearer ${AccessToken}`,
  },
});

let apolloClient;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true, // set to true for SSR
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

// eslint-disable-next-line @typescript-eslint/ban-types
export function initializeApollo(initialState: null | Object = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
