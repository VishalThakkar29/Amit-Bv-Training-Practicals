import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: process.env.REACT_APP_API_GATEWAY_URL,
//   cache: new InMemoryCache(),
// });
// console.log(process!.env.REACT_APP_API_GATEWAY_URL);

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_GATEWAY_COUNTRY,
  cache: new InMemoryCache(),
});
