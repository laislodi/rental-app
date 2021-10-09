import React from 'react';
import {NavLink} from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <section className="container py-5">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 col-10 mx-auto opacity p-3">
            <h1>Jacir & Brianne Lodi</h1>
            <p className="lead text-muted">O melhor prédio da cidade</p>
            <NavLink activeClassName='active' className="link-hover" to='/nossas-unidades'>
              <button className="btn my-2">Veja nossas unidades</button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;