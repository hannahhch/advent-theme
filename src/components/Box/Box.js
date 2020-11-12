import './Box.css';
import React from 'react';

const Box = (props) => {
  const [showSecretContent, setShowSecretContent] = React.useState(false);

  const handleBoxClick = () => {
    !showSecretContent ? setShowSecretContent(true) : setShowSecretContent(false);
  }

  const displaySecretContent = () => {
    return (
      <div className= "box-content">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer">
          Start your task!
        </a>
      </div>
    )
  }

  return (
    <div className="box" onClick={handleBoxClick}>
      <h2 className="box-title">{props.day}</h2>
      { showSecretContent ? displaySecretContent() : null }
    </div>
  )
}

export default Box;