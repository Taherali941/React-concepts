import { useState } from "react"
import Login from "./Components/Login"
import Logout from "./Components/Logout.jsx"

function App() {
  const [user, isUserLoggedin] = useState(false)
  if (user == true) {
    return <Logout/>
  } else {
   return <Login/>
  }
}

export default App
