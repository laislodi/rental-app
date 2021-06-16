import React from 'react';
import './App.css';
import TopMenu from './public/home/components/navbar/TopMenu';
import Banner from './public/home/components/Banner';
import Units from './public/units/Units';
import Footer from './public/footer/Footer';

function App() {
  return (
    <div className="App">
      <TopMenu activeLink={0}/>
      <Banner id="#"/>
      <Units id="#nossas-unidades"/>
      <Footer/>
    </div>
  );
}

export default App;
