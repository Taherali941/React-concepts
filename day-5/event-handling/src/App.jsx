function App() {
  function handleClick(){
    alert("i am clicked")
    document.body.style.backgroundColor = 'red';

  }
  return (
    <>
      <div>
        <button onClick={handleClick}> 
            click me
        </button>
      </div>
    </>
  )
}

export default App
