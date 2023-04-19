import { ApolloClient, InMemoryCache } from "@apollo/client";

import { HttpLink, ApolloLink, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// export const client = new ApolloClient({
//   uri: process.env.REACT_APP_API_GATEWAY_MUTATION,
//   headers: {
//     authorization: localStorage.getItem("access_token") || "",
//   },
//   cache: new InMemoryCache(),
// });

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_GATEWAY_MUTATION,
});
const tokenData = localStorage.getItem("token");
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers

  operation.setContext(({ headers = {} }) => ({
    headers: {
      Authorization: tokenData || null,
      ...headers,
    },
  }));

  return forward(operation).map((response: any) => {
    // const path = Object.keys(response.data);
    // const metaData = response?.data[path[0]]?.meta;

    return response;
  });
});

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   // if (graphQLErrors) {
//   //   graphQLErrors.forEach(({ message }) => {
//   //     toast.error(message)
//   //   })
//   // }
//   // if (networkError?.statusCode === MESSAGE_CODE.NOT_FOUND)
//   //   alert(networkError.message);
//   // if (networkError?.statusCode === MESSAGE_CODE.UNAUTHORIZED);
//   // if (networkError?.statusCode === MESSAGE_CODE.INTERNAL_SERVER_ERROR)
//   //   window.location.replace(<h2>Page Not Found</h2>);
// });

export const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: from([authMiddleware, httpLink]),
});
// export const client = new ApolloClient({
//   uri: process.env.REACT_APP_API_GATEWAY_URL_MOVIE,
//   cache: new InMemoryCache(),
// });
