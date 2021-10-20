import Box from '../Box/Box';
import data from '../../data/m1'
import './Boxes.css'

const Boxes = (props) => {
  return (
    <main className="boxes">
      { props.data.days.map((el, index) => {
          return (
            <Box 
              key={index}
              day={index + 1} 
              link={el.link} 
              emoji={el.emoji}>
            </Box>
          )
        })}
    </main>
  )
}

export default Boxes;