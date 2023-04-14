import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../framework/graphql/getCountry";

const CountryList = () => {
  const [getCountry, { loading, error, data }] = useLazyQuery(GET_COUNTRY, {
    variables: { code: "NZ" },
    pollInterval: 500,
  });

  if (loading) return <h1> Loading</h1>;
  if (error) return <p>Error</p>;
  // console.log(data.country?.name);
  // console.log(data.country?.emoji);

  return (
    <>
      <h1>{data?.country.name}</h1>
      <div>{data?.country.emoji}</div>
      <button onClick={() => getCountry({ variables: { code: "IN" } })}>
        getCountry
      </button>
    </>
  );
};
export default CountryList;
