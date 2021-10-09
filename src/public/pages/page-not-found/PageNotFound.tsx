import React from "react";
import {NavLink} from "react-router-dom";


const PageNotFound: React.FC = () => {

  return (
    <div className="container page-not-found">
      <div className="page-not-found-image">
        <h1 className="py-5">A página que você está procurando não existe.</h1>
        <h2>Tente acessar a <NavLink className="text-danger" to='/' exact={true}>Página Inicial</NavLink></h2>
      </div>
    </div>
  )
}

export default PageNotFound;
