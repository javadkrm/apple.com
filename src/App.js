import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navabr/Navbar';
import routes from './routes';
import Home from './Pages/Home/Home';

function App() {
  let router = useRoutes(routes)
  return (
    <div className="App">
      <Navbar/>
      {router}
    </div>
  );
}

export default App;
