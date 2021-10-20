import React from 'react';
import Title from '../Title/Title';
import './Navigation.css';

const Navigation = (props) =>  {
  console.log(props)

  return (
    <nav className="navigation">
      <Title title={props.title}/>
    </nav>
  )
}

export default Navigation;