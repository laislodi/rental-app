import React from 'react';

function MenuItem (props: {text: string, isActive: boolean, linkTo: string}) {
  const activeClass = props.isActive ? "active" : "";

  return (
    <li className="navbar-item">
      <a className={"nav-link " + activeClass} href={props.linkTo}>{props.text}</a>
    </li>
  );
};

export default MenuItem;