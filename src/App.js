import React from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Shop from "./components/Shop";
import Feature from "./components/Feature";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={
      <>
      <Header/>
      </>
    }/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/feature" element={<Feature/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   
   </>
  );
}

export default App;
