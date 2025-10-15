import { useEffect,useState} from "react"
function App() {
  const [count,setCount]= useState(0)
  const [total,setTotal]= useState(0)
  // variation 1:- runs on every render
  // useEffect(()=>{
  //   alert("runs on every render")
  // })
  
  // variation 2:- runs on first render only
  //   useEffect(()=>{
  //   alert("runs on first render only")
  // },[])

  // variation 3:- runs only when count is updated
  //   useEffect(()=>{
  //    alert("runs only when count is updated")
  // },[count])

  // variation 4:- multiple dependencies
  //   useEffect(()=>{
  //    alert("runs only when count and total is updated")
  // },[count,total])

  // variation 4:- multiple dependencies
  // useEffect(() => {
  //   alert("count is updated")
  //   return ()=>{
  //     alert("count is unmounted from ui");
  //   }
  // }, [count])
  return (
    <>
      <div>
        <h1>follow me for more vaaluable content like this</h1>
        <button onClick={()=>{
          setCount(count+1)
          setTotal(total+2)
        }}>
          count {count} total {total}
        </button>
      </div>
    </>
  )
}

export default App
