import './Box.css';
import React from 'react';

const Box = (props) => {
  const [showSecretContent, setShowSecretContent] = React.useState(false);

  const handleBoxClick = () => {
    !showSecretContent ? setShowSecretContent(true) : setShowSecretContent(false);
  }

  const getBoxClasses = () => {
    return showSecretContent ? "box animated" : "box"
  }

  const getInnerBoxClasses = () => {
    return showSecretContent ? "box--inner animated" : "box--inner"
  }

  return ( 
    <div className={getBoxClasses()} onClick={handleBoxClick}>
      <a className="box-link" target="_blank" href={props.link}>Let's Go!</a>
      <div className={getInnerBoxClasses()}>
        <h2 className="box-title">{props.day}</h2>
      </div>
    </div> 
  )
}

export default Box;