import { useState } from 'react'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  const userData = {
    name :"taher ali",
    age : 18,                  
    email: "xyx@gmail.com,"
  };

  const data = ['apple','ball','cat','dog'];

  return (
    <>
      <Card array ={data} object={userData}/>
    </>
  )
}

export default App
