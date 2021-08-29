import React from 'react';
import logo from '../../images/JacirBrianne_Logo_200x80.png';
import MenuItem from './MenuItem';
import TopLogo from './TopLogo';

export type MenuItemsType = {
  link: string,
  text: string,
}

const TopMenu: React.FC = () => {
  const menuItems : MenuItemsType[] = [
    { text: 'Início', link: '/' },
    { text: 'Sobre nós', link: '/sobre-nos' },
    { text: 'Nossas Unidades', link: '/nossas-unidades' },
    { text: 'Contato', link: '/contato' }
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-xl">
        <TopLogo logo={logo} linkTo="/"/>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mb-1 mb-lg-0">
            {menuItems.map((menuItem, index) => {
              return <MenuItem key={index} text={menuItem.text} linkTo={menuItem.link} />
            })}
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