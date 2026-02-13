import { useState } from 'react';
import { useRoutes } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navabr/Navbar';
import routes from './routes';
import productsContext from './Contexts/productsContext';
import { MainProductsData, macPageProducts } from './Datas';
import Footer from './Components/Footer/Footer';
import Bag from './Components/Bag/Bag';

function App() {
  let router = useRoutes(routes)
  const [mainProducts, setMainProducts] = useState(MainProductsData)
  const [macProducts, setMacProducts] = useState(macPageProducts)
  const [userBagDatas, setUserBagDatas] = useState([])
  const [isBagOpen, setIsBagOpen] = useState(false)

  return (
    <productsContext.Provider value={{
      mainProducts,
      userBagDatas,
      isBagOpen,
      macProducts,
      setMacProducts,
      setMainProducts,
      setUserBagDatas,
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
