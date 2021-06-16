import React from 'react';

function Banner(props: { id: string }) {
  return (
    <div className="banner" id={props.id}>
      <section className="container py-5">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 col-10 mx-auto opacity p-3">
            <h1>Jacir & Brianne Lodi</h1>
            <p className="lead text-muted">O melhor prédio da cidade</p>
            <p>
              <a href="#nossas-unidades" className="btn my-2">Veja nossas unidades</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;