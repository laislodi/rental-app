import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import './App.css';
import TopMenu from './public/menu/TopMenu';
import Banner from './public/home/components/Banner';
import Units from './public/units/Units';
import AboutUs from './public/aboutUs/AboutUs';
import Footer, {FooterParameters} from './public/footer/Footer';
import {useQueryHighlightedApartments} from './queries/useQueryHighlightedApartments';
import Contactus from './public/contact/Contactus';
import ApartmentPage from './public/units/ApartmentPage';
import { useQueryGetFootParameters } from "./queries/useQueryGetFootParameters";

function App() {

  const { loadingHighlightedApartments, highlightedApartments } = useQueryHighlightedApartments();
  const { loading, parameter: parameters } = useQueryGetFootParameters();

  if ( loadingHighlightedApartments || loading ) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <div>
        <TopMenu />

        <Switch>
          <Route path="/" exact={true}>
            <Banner id='#' />
            <Units id='units' album={highlightedApartments} />
          </Route>
          <Route path="/sobre-nos">
            <AboutUs />
          </Route>
          <Route path="/contato">
            <Contactus />
          </Route>
          <Route path="/nossas-unidades">
            <Units  id='units-page' album={highlightedApartments}/>
          </Route>
          <Route path="/apartamento/:number">
            <ApartmentPage />
          </Route>
        </Switch>
      </div>
      <Footer parameters={parameters}/>
    </Router>
  );
}

export default App;
