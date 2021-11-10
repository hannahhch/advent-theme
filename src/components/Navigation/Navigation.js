import React from 'react';
import Title from '../Title/Title';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = (props) =>  {
  return (
    <nav className="navigation">
      <Link className='back-btn' to='/'>🏠</Link>
      <Title title={props.title} module={props.module}/>
    </nav>
  )
}

export default Navigation;
