import Box from '../Box/Box';
import data from '../../data/box-details'
import './Boxes.css'

const Boxes = () => {
  return (
    <main className="boxes">
      { data.map((el, index) => {
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