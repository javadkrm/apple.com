import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navabr/Navbar';
import routes from './routes';
import productsContext from './Contexts/productsContext';
import unitsDatas from './Datas';
import { anotherUnitsDatas, moviesDatas, scrollSliderDatas, productsCategoryData, scrollCardDatas, MainProductsData } from './Datas';
import Footer from './Components/Footer/Footer';

function App() {
  let router = useRoutes(routes)

  const [units, setUnits] = useState(unitsDatas)
  const [anotherUnits, setAnotherUnits] = useState(anotherUnitsDatas)
  const [userCarts, setUserCarts] = useState([])
  const [movies, setMovies] = useState(moviesDatas)
  const [scrollDatas, setScrollDatas] = useState(scrollSliderDatas)
  const [categoryDatas, setCategoryDatas] = useState(productsCategoryData)
  const [scrollCards, setScrollCardDatas] = useState(scrollCardDatas)
  const [mainProducts, setMainProducts] = useState(MainProductsData)
  const [userBagDatas, setUserBagDatas] = useState([])

  return (
    <productsContext.Provider value={{
      units,
      anotherUnits,
      movies,
      mainProducts,
      userBagDatas,
      scrollDatas,
      categoryDatas,
      scrollCards,
      userCarts,
      setMainProducts,
      setUserBagDatas,
      setCategoryDatas,
      setScrollDatas,
      setScrollCardDatas,
      setMovies,
      setAnotherUnits,
      setUnits,
      setUserCarts
    }}>
      <div className="App">
        <Navbar />
        <aside className='sidebar'>
          hello
        </aside>
        {router}
        <Footer />
      </div>
    </productsContext.Provider>
  );
}

export default App;
