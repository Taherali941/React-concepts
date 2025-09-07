import { useState } from "react"
import Login from "./Components/Login"
import Logout from "./Components/Logoutbtn.jsx"
import Logoutbtn from "./Components/Logoutbtn.jsx"

function App() {
  const [user, isUserLoggedin] = useState(false)
  if (user == true) {
    return <Logoutbtn/>
  } else {
   return <Login/>
  }
}

export default App
