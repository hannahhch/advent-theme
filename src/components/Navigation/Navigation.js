import React from 'react';
import Title from '../Title/Title';
import Tooltip from '../Tooltip/Tooltip';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Title/>
      <Tooltip/>
    </nav>
  )
}

export default Navigation;