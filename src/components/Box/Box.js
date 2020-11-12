import './Box.css';
import React from 'react';

const Box = (props) => {
  const [showSecretContent, setShowSecretContent] = React.useState(false);

  const handleBoxClick = () => {
    !showSecretContent ? setShowSecretContent(true) : setShowSecretContent(false);
  }

  return (
    <div className={
      "box " + (showSecretContent ? " animated" : "")
    } onClick={handleBoxClick}>
      <a className="box-link" target="_blank" href={props.link}>Let's Go!</a>
      <div className={
        "box--inner " + (showSecretContent ? " animated" : "")
      }>
        <h2 className="box-title">{props.day}</h2>
      </div>
    </div>
  )
}

export default Box;