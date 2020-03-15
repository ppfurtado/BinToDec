import React from "react";

const Input = ({placeholder, name, id, value}) => {
  return (
    <input value={value} id={id} name={name} type="text" placeholder={ placeholder }/>
  )
}

export default Input
