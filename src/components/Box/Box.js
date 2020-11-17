import './Box.css';
import React from 'react';

const Box = (props) => {
  const [showSecretContent, setShowSecretContent] = React.useState(false);
  const [hideBox, setHideBox] = React.useState(false);

  const handleBoxDoorClick = () => {
    !showSecretContent ? setShowSecretContent(true) : setShowSecretContent(false);
  }

  const handleBoxCloseClick = () => {
    !hideBox ? setHideBox(true) : setHideBox(false);
  }

  const getBoxDoorClasses = () => {
    return showSecretContent ? "box--door animated" : "box--door"
  }

  return ( 
    <div className="box" onClick={handleBoxDoorClick}>
      {!hideBox ? 
      <a className="box-link" target="_blank" href={props.link}>
        <span>
          {props.emojii}
        </span>
      </a>
        : <span className="box-title">{props.day}</span> }
      {!hideBox ? 
      
      <div className={getBoxDoorClasses()}>
        <button 
          onClick={handleBoxCloseClick}
            className="box-close" title="Finished?">✖️
        </button>
        <h2 className="box-title">{props.day}</h2>
      </div> : null }
    </div> 
  )
}

export default Box;