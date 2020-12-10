import React from 'react';
import BoxLink from '../BoxLink/BoxLink';
import './PendingBox.css';

const PendingBox = (props) => {
  return (
    <>
      <BoxLink emoji={props.emoji} link={props.link} />
      <div className={props.getBoxDoorClasses()}>
        <h2 className="box-title">{props.day}</h2>
        {/* <button
          onClick={props.handleBoxCloseClick}
          className="box-close" title="Finished?">&#215;
        </button> */}
      </div>
    </>
  )
}

export default PendingBox;