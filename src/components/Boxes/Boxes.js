import Box from '../Box/Box';
import './Boxes.css'

const Boxes = () => {

  return (
    <main className="boxes">
      <Box day={1} link="http://www.codepen.io/" emojii='⛄'></Box>
      <Box day={2} link="#" emojii='🥶'></Box>
      <Box day={3} emojii='🏂'></Box>
      <Box day={4} emojii='🌲'></Box>
      <Box day={5} emojii='🏔️'></Box>
      <Box day={6} emojii='❄️'></Box>
      <Box day={7} emojii='🧥'></Box>
      <Box day={8} emojii='🎿'></Box>
      <Box day={9} emojii='🧣'></Box>
      <Box day={10} emojii='🧤'></Box>
      <Box day={11} emojii='✨'></Box>
      <Box day={12} emojii='🎁'></Box>
    </main>
  )
}

export default Boxes;