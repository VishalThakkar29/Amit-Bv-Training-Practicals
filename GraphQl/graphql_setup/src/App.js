import { useQuery } from '@apollo/client';
// import Home from './Home';
import './App.css';
import DataList from './DataList';
import { GET_CHARACTERS } from './frameWork/graphql/characters';

function App() {
  const { error, loading, data } = useQuery(GET_CHARACTERS)
  if (error) {

    alert("error")
  }
  if (loading) {

    alert("Loading")
  }

  return (
    <>
      <div className='cont'>

        {/* <Home /> */}
        <DataList data={data} />

      </div>

    </>
  );
}

export default App;
