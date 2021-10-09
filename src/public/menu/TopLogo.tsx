import React from 'react';
import {NavLink} from "react-router-dom";

function TopLogo (props: {logo: string, linkTo: string}) {
  return (
    <NavLink activeClassName='active' className="link-hover" to='/'>
      <img className="logo-nav" src={props.logo} alt={''}/>
    </NavLink>
  );
}

export default TopLogo;