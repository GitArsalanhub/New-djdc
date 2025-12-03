
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './App.css'
import Navbar from './Navbar';
import Banner from "./Banner";
import CardSec from './CardSec';
import Battery from './Battery';
import QualityMeet from './QualityMeet';
import AboutUs from './AboutUs';
import QuerySec from './QuerySec';
import Footer from './Footer';


function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CardSec />
      <Battery />
      <QualityMeet />
      <AboutUs />
      <QuerySec />
      <Footer />
    </>
  )
}

export default App
