
import React from "react";
import './App.css';
import Header from './Componets/Header';
import Footer from "./Componets/Footer";
import Navlinks  from './Componets/Navlinks';
import Content from "./Componets/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Navlinks />
        <Content />
      </div>
      <Footer />


    </div>
  );
}

export default App;
