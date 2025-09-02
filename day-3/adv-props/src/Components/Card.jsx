import React from 'react'

const Card = ({array}) => {
  return (
    <div>
        {/* <p>this the content from app.jsx object</p>
        <h1>{object.name}</h1>
        <h1>{object.age}</h1>
        <h1>{object.email}</h1> */}

        <ul>
            {array.map((item,index) => <li key={index}> {item} </li> )}
        </ul>
    </div>
  )
}

export default Card