import './Box.css';
import React from 'react';

const Box = (props) => {
  const [showSecretContent, setShowSecretContent] = React.useState(false);
  const [hideBox, setHideBox] = React.useState(false);

  const handleBoxClick = () => {
    !showSecretContent ? setShowSecretContent(true) : setShowSecretContent(false);
  }

  const handleBoxCloseClick = () => {
    !hideBox ? setHideBox(true) : setHideBox(false);
  }

  const getBoxClasses = () => {
    return showSecretContent ? "box animated" : "box"
  }

  const getInnerBoxClasses = () => {
    return showSecretContent ? "box--inner animated" : "box--inner"
  }


  return ( 
    <div className={getBoxClasses()} onClick={handleBoxClick}>
      {!hideBox ? 
      <a className="box-link" target="_blank" href={props.link}>
        <span>
          {props.emojii}
        </span>
      </a>
        : <span className="box-title">{props.day}</span> }
      {!hideBox ? 
      
      <div className={getInnerBoxClasses()}>
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