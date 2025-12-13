import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navabr/Navbar';
import routes from './routes';
import productsContext from './Contexts/productsContext';
import unitsDatas from './Datas';
import { anotherUnitsDatas, moviesDatas, scrollSliderDatas, productsCategoryData, scrollCardDatas, MainProductsData, macPageProducts } from './Datas';
import Footer from './Components/Footer/Footer';
import Bag from './Components/Bag/Bag';

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
  const [macProducts, setMacProducts] = useState(macPageProducts)
  const [userBagDatas, setUserBagDatas] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)

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
      isBagOpen,
      macProducts,
      setMacProducts,
      setMainProducts,
      setUserBagDatas,
      setCategoryDatas,
      setScrollDatas,
      setScrollCardDatas,
      setMovies,
      setAnotherUnits,
      setUnits,
      setUserCarts,
      setIsBagOpen
    }}>
      <div className="App">
        <Navbar onBagClick={() => setIsBagOpen(!isBagOpen)} />
        <Bag isOpen={isBagOpen} onClose={() => setIsBagOpen(false)} />
        {router}
        <Footer />
      </div>
    </productsContext.Provider>
  );
}

export default App;
