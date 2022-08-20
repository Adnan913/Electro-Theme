import './App.css';
import HeaderTop from './components/HeaderTop'
import HeaderCenter from './components/HeaderCenter'
import Carousel from "./components/Carousel"
import FourCategories from './components/FourCategories';
import Featured from './components/Featured.jsx'

function App() {
  return (
    <>
      <HeaderTop/>
      <HeaderCenter/>
      <Carousel/>
      <FourCategories/>
      <Featured/>
    </>
  );
}

export default App;
