import React from 'react';
import logo from '../../../../JacirBrianne_Logo_200x80.png';
import MenuItem from './MenuItem';
import TopLogo from './TopLogo';

function TopMenu(props: {activeLink: number}) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-xl">
        <TopLogo logo={logo} linkTo="#"/>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <MenuItem text="Início" isActive={props.activeLink === 0} linkTo="#"/>
            <MenuItem text="Sobre nós" isActive={props.activeLink === 1} linkTo="#sobre-nos"/>
            <MenuItem text="Nossas Unidades" isActive={props.activeLink === 2} linkTo="#nossas-unidades"/>
            <MenuItem text="Contato" isActive={props.activeLink === 3} linkTo="#contato"/>
          </ul>
        </div>
        <div>
          <button type="button" className="btn btn-secondary">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default TopMenu;