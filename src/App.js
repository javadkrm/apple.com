import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navabr/Navbar';
import routes from './routes';
import Footer from './Components/Footer/Footer';
import Bag from './Components/Bag/Bag';

function App() {
  let router = useRoutes(routes)
  const [isBagOpen, setIsBagOpen] = useState(false)
  return (
    <div className="App">
      <Navbar onBagClick={() => setIsBagOpen(!isBagOpen)} />
      <Bag
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
      />
      {router}
      <Footer />
    </div>
  );
}

export default App;




// من تو یه پروژه ای میخوام context رو حذف کنم و از Redux استفاده کنم ولی یه state باقی مونده که نمیدونم چیکارش کنم 
// کاری کن اون state بدون استفاده از context استفاده بشه