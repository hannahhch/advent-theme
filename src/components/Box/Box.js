import './Box.css';

const Box = (props) => {
  return (
    <div className="box">
      <h2 className="box-title">{props.day}</h2>
    </div>
  )
}

export default Box;