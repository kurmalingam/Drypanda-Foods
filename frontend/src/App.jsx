import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GlitterText from "./components/GlitterText/GlitterText"
import ContactModal from './components/ContactModal/ContactModal.jsx'
import InternshipPopup from './components/InternshipPopup/InternshipPopup.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import InternshipPage from "./pages/InternshipPage.jsx";
import NewsroomSection from './components/NewsroomSection/NewsroomSection.jsx'
import AboutSection from './components/AboutSection/AboutSection.jsx'
import Footer from './components/Footer/Footer.jsx'
import AuthPage from './pages/AuthPage';
import Ecart from './pages/Ecart.jsx'



const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <GlitterText/>
          <ContactModal/>
          <InternshipPopup/>
           <HeroSection/>
           <ProductCard/>
           <NewsroomSection/>
           <AboutSection/>
           <Footer/>
          </>
          } />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/auth/*" element={<AuthPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/ecart" element={<Ecart/>}/>

      </Routes>
    </>
  );
};

export default App;
