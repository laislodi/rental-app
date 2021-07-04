import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import TopMenu from './public/menu/TopMenu';
import Banner from './public/home/components/Banner';
import Units from './public/units/Units';
import Footer from './public/footer/Footer';
import {useQueryHighlightedApartments} from './queries/useQueryHighlightedApartments';
import Contactus from './public/contact/Contactus';
import {useQueryAvailableApartments} from './queries/useQueryAvailableApartments';
import ApartmentPage from './public/units/ApartmentPage';

function App() {

  const { loadingHighlightedApartments, highlightedApartments } = useQueryHighlightedApartments();
  const { loadingAvailableApartments, highlightedAvailableApartments } = useQueryAvailableApartments();

  if (loadingHighlightedApartments) return <div>Loading...</div>

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
            <About />
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
      <Footer />
    </Router>
  );
}

const About: React.FC = () => {
  return <h2>About</h2>;
}

export default App;
