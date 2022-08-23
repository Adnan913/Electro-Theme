import './App.css';
import HeaderTop from './components/HeaderTop'
import HeaderCenter from './components/HeaderCenter'
import Carousel from "./components/Carousel"
import FourCategories from './components/FourCategories';
import Featured from './components/Featured.jsx'
import BestDeals from './components/BestDeals.jsx'
import Footer from './components/Footer.jsx';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <HeaderTop/>
      <HeaderCenter/>
      <Carousel/>
      <FourCategories/>
      <Featured/>
      <BestDeals/>
      <Footer/>

      
    </>
  );
}

export default App;
