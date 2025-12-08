import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navabr/Navbar';
import routes from './routes';
import productsContext from './Contexts/productsContext';
import unitsDatas from './Datas';
import { anotherUnitsDatas, moviesDatas } from './Datas';

function App() {
  let router = useRoutes(routes)

  const [units, setUnits] = useState(unitsDatas)
  const [anotherUnits, setAnotherUnits] = useState(anotherUnitsDatas)
  const [userCarts, setUserCarts] = useState([])
  const [movies, setMovies] = useState(moviesDatas)
  
  return (
    <productsContext.Provider value={{
      units,
      anotherUnits,
      movies,
      setMovies,
      setAnotherUnits,
      setUnits,
      userCarts,
      setUserCarts
    }}>
      <div className="App">
        <Navbar />
        {router}
      </div>
    </productsContext.Provider>
  );
}

export default App;
