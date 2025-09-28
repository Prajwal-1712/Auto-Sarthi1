
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import FareEstimate from './components/FareEstimate'
import About from './components/About';
import Appcard from './components/Appcard';
import JoinFamilyCard from './components/JoinFamilyCard';
import ContactUs from './components/ContactUs';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home/> 
      <FareEstimate/>
       <About/>
       <Appcard/>
       <JoinFamilyCard/>
       <ContactUs/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
export default App;
