import { useQuery } from "@apollo/client";

import "./App.css";
import CountryList from "./components/CountryList";
import DataList from "./components/DataList";
// import DogsList from "./components/DogsList";

import { GET_LOCATIONS } from "./framework/graphql/location";
export interface DataProps {
  description: string;
  id: string;
  name: string;
  photo: string;
}

function App() {
  // const { data, error, loading } = useQuery(GET_LOCATIONS);
  // const dataNew = data?.locations;

  // if (error) {
  //   return <p>Error</p>;
  // }
  // if (loading) {
  //   return <p>Loading</p>;
  // }
  // // console.log(data.locations);
  // // console.log(dataNew);
  // console.log(data);
  return (
    <>
      {/* <DogsList /> */}
      <div className="cont">
        {/* <DataList data={dataNew} /> */}
        {/* <CountryList></CountryList> */}
        <CountryList />
      </div>
    </>
  );
}

export default App;
