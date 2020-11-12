import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './Snowflakes.css'

const Snowflakes = () => {
  const renderManySnowflakes = (amount) => {
    for (let i = 0; i < amount; i ++) {
      return (
        <div className="snowflake">
          <FontAwesomeIcon icon={faSnowflake} />
        </div>
      )
    }
  }
  return (
    <section className="snowflakes">
      {renderManySnowflakes(10)}
    </section>  
  )
}

export default Snowflakes;

