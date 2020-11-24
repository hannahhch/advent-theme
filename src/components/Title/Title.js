import React from 'react';
import data from '../../data/m1';
import './Title.css';

const Title = () => {
  return <h1 className="title">{data.days.length} Days of {data.category}</h1>
}

export default Title;