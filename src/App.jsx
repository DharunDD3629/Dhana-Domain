
import './App.css'
import Dhana from './Dhana'
import Greeting from './Dhana1'

import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'

function App() {
  return (
    <>
      <Dhana name="Dhana "  role="Java Developer" img={img1} rate="6" show={false} />
      <Dhana name="Deeps" role="Java Developer" img={img2} rate="7" />
      <Dhana name="Deepak" role="Python Developer" img={img3}/>

       <Greeting name="Dharun" />

    </>
  )
}

export default App
