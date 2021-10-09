import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import './public/styles/public.css';
import TopMenu from './public/menu/TopMenu';
import AboutUs from './public/pages/about-us/AboutUs';
import Footer from './public/components/footer/Footer';
import Contactus from './public/pages/contact-us/Contactus';
import ApartmentPage from './public/pages/apartment-page/ApartmentPage';
import AvailableApartments from "./public/pages/available-apartments/AvailableApartments";
import HomePage from "./public/pages/home-page/HomePage";
import PageNotFound from "./public/pages/page-not-found/PageNotFound";


function App() {

  return (
    <Router>
      <TopMenu/>
      <div className="page-content">
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/sobre-nos" component={AboutUs} />
          <Route path="/contato" component={Contactus} />
          <Route path="/nossas-unidades" component={AvailableApartments} />
          <Route path="/apartamento/:apartmentNumber" component={ApartmentPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
