import React from 'react'

function Vehiculos(props) {
  return (
    <div>
        <h1>
            Vehiculo: {props.nombre}
        </h1>
        <p>
            Velocidad Maxima del vehiculo: {props.velocidadMaxima}
        </p>
        <button onClick={()=> props.mostrar(props.velocidadMaxima)}>Peligro</button>

    </div>
  )
}

export default Vehiculos