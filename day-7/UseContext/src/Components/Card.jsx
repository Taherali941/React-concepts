import React from 'react'
import { useState } from 'react'
import './Card.css'

const Card = (props) => {

  const [first, setfirst] = useState(0)
  
  return (
    <>
    <div className='mm'>
        <img src={props.imageSrc} alt="hh" />
        <div className="cont">
            <h1>{props.name}</h1>
            <p>hello, i am a web developer and i know html css javascript and currently learning react</p>
            <button onClick={ ()=>{
              setfirst(first +1)
            }}> click {first}</button>
        </div>
    </div>
    </>
  )
}
export default Card;
