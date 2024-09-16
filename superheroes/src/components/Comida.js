import React from 'react'

function Comida(props) {
  return (
    <div>
        <h1>
            Tipo de comida: {props.tipo}
        </h1>
        <p>
            Ingredientes: {props.ingrediente.join(", ")}
        </p>
    </div>
  )
}

export default Comida