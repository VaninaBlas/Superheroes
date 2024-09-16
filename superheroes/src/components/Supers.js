import React from 'react'

function Supers(props) {
  return (
    <div>
        <h1>Nombre del superheroe: {props.nombre}</h1>
        <p>Superpoder: {props.superpoder}</p>
    </div>
  )
}

export default Supers;