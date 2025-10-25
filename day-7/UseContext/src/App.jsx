import React from 'react'
import Card from './Components/Card.jsx'
import vitelogo from './assets/react.svg'
import hakla from './assets/download.jpg'
import shakti from './assets/shakti.jpg'
import './index.css'

function App() {

  return (
    <>
    <div className="cards">
      <Card name = 'taher ali' imageSrc = {vitelogo}/>
      <Card name='shaktiman' imageSrc = {shakti}/>
      <Card name='hakla sharuk' imageSrc = {hakla}/>
    </div>
    </>
  )
}

export default App;
