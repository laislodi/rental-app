import React from 'react';

function TopLogo (props: {logo: string, linkTo: string}) {
  return (
    <a className="navbar-brand bg-light" href={props.linkTo}>
      <img className="logo-nav" src={props.logo}/>
    </a>
  );
};

export default TopLogo;