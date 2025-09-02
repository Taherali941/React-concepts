import React from 'react'

function Card1({text, setText}) {
  return (
    <div >
        <input type='text' value={text} onChange={ (e)=> {
            setText(e.target.value)
            }} />
    </div>
  )
}

export default Card1
