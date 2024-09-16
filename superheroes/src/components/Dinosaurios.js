import React from 'react'

function Dinosaurios(props) {
  return (
    <div>
      <h1>Nombre dinosaurio: {props.nombre}</h1>
      <p>Dieta del dinosaurio: {props.dieta}</p>
    </div>
  )
}

export default Dinosaurios