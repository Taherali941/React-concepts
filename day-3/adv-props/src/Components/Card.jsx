import React from 'react'

const Card = ({array,object}) => {
  return (
    <div>
        <p>this is the content from app.jsx object</p>
        <h5>{object.name}</h5>
        <h5>{object.age}</h5>
        <h5>{object.email}</h5> 

        <ul>
          <p>this is the content from app.jsx Array</p>
            {array.map((item,index) => <li key={index}> {item} </li> )}
        </ul>
    </div>
  )
}

export default Card