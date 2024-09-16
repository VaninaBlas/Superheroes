import React from 'react'

function Juegos(props) {
  return (
    <div>
        <h1>
            Nombre del juego: {props.nombre}
        </h1>
        <button onClick={()=> props.mostrarAlerta(props.nombre)}>boton</button>
    </div>
  )
}

export default Juegos