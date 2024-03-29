import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <h1 className="title">
        10 Days of {props.title} (Mod {props.module})
    </h1>
  )
}

export default Title;
