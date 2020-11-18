import './Box.css';
import React from 'react';
import PendingBox from '../PendingBox/PendingBox';
import CompletedBox from '../CompletedBox/CompletedBox';

const Box = (props) => {
  const [showSecretContent, setShowSecretContent] = React.useState(false);
  const [completedBox, setCompletedBox] = React.useState(false);

  const handleBoxDoorClick = () => {
    !showSecretContent ? setShowSecretContent(true) : setShowSecretContent(false);
  }

  const handleBoxCloseClick = () => {
    !completedBox ? setCompletedBox(true) : setCompletedBox(false);
  }

  const getBoxDoorClasses = () => {
    return showSecretContent ? "box--door animated" : "box--door"
  }

  const renderBoxContent = () => {
    if (!completedBox) {
      return (
        <PendingBox 
          emoji={props.emoji}
          link={props.link}
          day={props.day}
          handleBoxCloseClick={handleBoxCloseClick} 
          getBoxDoorClasses={getBoxDoorClasses}
        />
      )
    } else {
      return <CompletedBox day={props.day}/>
    }
  }
  
  return ( 
    <div 
      className={!completedBox ? 'box' : 'box completed'} 
      onClick={handleBoxDoorClick}
    >
      {renderBoxContent()}
    </div> 
  )
}

export default Box;