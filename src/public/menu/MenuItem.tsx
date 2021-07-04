import React from 'react';
import { NavLink } from "react-router-dom";

function MenuItem (props: {text: string, linkTo: string}) {

  return (
    <li className="navbar-item">
      <NavLink activeClassName='active' className="nav-link" to={props.linkTo} exact={true}>{props.text}</NavLink>
    </li>
  );
}

export default MenuItem;