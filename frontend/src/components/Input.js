import React from 'react'

function Input(props) {
  return (
    <input 
     type={props.type}
     width={props.width}
    placeholder={props.placeholder}
    name={props.name}
    />
  )
}

export default Input