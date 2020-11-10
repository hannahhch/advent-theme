import './Box.css';

const Box = (props) => {
  return (
    <div className="box">
      <h2 className="box-title">{props.day}</h2>
      <button>Open Me!</button>
    </div>
  )
}

export default Box;