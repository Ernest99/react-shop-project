import React from "react";
import Header from "./components/Header";
import { Route,Routes} from "react-router-dom";
import Shop from "./components/Shop";
import Feature from "./components/Feature";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
   <>
   <ScrollToTop/>
   <Routes>
   
    <Route path="/" element={
      <>
      <Header/>
      <Footer/>
      </>
    }/>
   
    <Route path="/shop" element={<>
    <Shop/>
    <Footer/>
    </>}/>
    <Route path="/feature" element={<Feature/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

   </Routes>
   
   </>
  );
}

export default App;
