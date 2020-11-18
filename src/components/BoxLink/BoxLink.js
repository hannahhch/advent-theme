import './BoxLink.css';
import React from 'react';

const BoxLink = (props) => {
  return (
    <a className="box-link" rel="noreferrer" target="_blank" href={props.link}>
      <span className="box-pulse"></span>
      <span className="box-emoji">
        {props.emoji}
      </span>
    </a>
  )
}

export default BoxLink;