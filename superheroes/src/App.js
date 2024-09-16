import Supers from './components/Supers';
import Dinosaurios from './components/Dinosaurios';
import Comida from './components/Comida';
import Vehiculos from './components/Vehiculos';
import Juegos from './components/Juegos';

function App() {
  const MostrarAlerta=(nombre)=>{
    alert(`Juego de mesa: ${nombre}`)
  }
  return (
    <div className="App">
      <Supers nombre="Spider Man" superpoder="Sentido arácnico"/>
      <Dinosaurios nombre="Tyrannosaurus Rex" dieta="Carnívoro"/>
      <Comida tipo="pizza" ingrediente={["Harina", "Tomate", "Queso", "Pepperoni"]}/>
      <Vehiculos nombre="Millennium Falcon" velocidadMaxima={1050} />
      <Juegos nombre="Catan" mostrarAlerta={MostrarAlerta}/>
    </div>
  );
}

export default App;
