import { useState } from "react"
import Login from "./Components/Login"
import Logout from "./Components/Logoutbtn.jsx"
import Logoutbtn from "./Components/Logoutbtn.jsx"

function App() {
  const [user, isUserLoggedin] = useState(true)
  // if (user == true) {
  //   return <Logoutbtn/>
  // } else {
  //  return <Login/>
  // }
if(!user){
  return(
    <Logoutbtn/>
  )
}else{
  return(
    <Login/>
  )
}
// return(

//   // <div>
//   //   {user?<Logoutbtn/>:<Login/>}
//   // </div>
// )
}

export default App
