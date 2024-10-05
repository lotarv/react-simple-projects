import Accordion from "./components/accordion"
import ColorGenerator from "./components/color-generator"
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"
import TicTacToe from "./components/tic-tac-toe"
function App() {
  return ( <>
 <Accordion></Accordion>
  <ColorGenerator></ColorGenerator>
  <StarRating amount={10}></StarRating>
  <ImageSlider amount={10}></ImageSlider>
  <TicTacToe></TicTacToe>
  </>
  )
}

export default App
