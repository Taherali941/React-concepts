import { useState } from 'react'
import Card1  from './components/Card1'
import Card2 from './components/Card2'

function App() {
  const [text, setText] = useState("")

  return (
    <>
      <Card1 text ={text} setText={setText}/>
      <Card2 text ={text}/>
    </>
  )
}

export default App
