import { useState } from 'react'
import InputAdivina from './components/InputAdivina'
import MensajeAndpersand from './components/MensajeAndpersand'
import MensajeTenario from './components/MensajeTenario'
import BotonReiniciar from './components/BotonReiniciar'
import './App.css'

function App() {

  const [random, setRandom] = useState(Math.floor(Math.random()*100) + 1)
  const [inputAdivina, setInputAdivina] = useState(0);
  const [intentos, setIntentos] = useState(0)
  const [juegoTerminado, setJuegoTerminado] = useState(false)

  const renderizarInput = (captura) => {
    setInputAdivina(captura)
    if(captura===random) setJuegoTerminado(true)
    setIntentos(intentos + 1)
  }

  const reiniciarJuego = () => {
    setRandom(Math.floor(Math.random()*100) + 1)
    setJuegoTerminado(false)
    setInputAdivina(0)
    setIntentos(0)
  }


  return (
    <>
      <h1>Adivina el Número</h1>
      <InputAdivina actualizarInput={renderizarInput}/>
      <MensajeAndpersand captura={inputAdivina} valor={random} intentos={intentos}/>
      <MensajeTenario captura={inputAdivina} valor={random} intentos={intentos}/>
      {juegoTerminado && <BotonReiniciar restablecer={reiniciarJuego}/>}
    </>
  )
}

export default App

  /*const evaluarForm = (e) => {
    e.preventDefault();
    setIntentos(intentos+1);

    if (isNaN(inputAdivina) || inputAdivina < 1 || inputAdivina > 100) {
      setMensaje('Por favor, ingresa un número válido entre 1 y 100.')
    } else if (inputAdivina === random) {
      setMensaje("¡Felicidades! ¡Adivinaste el número en " + intentos +" intentos!")
    } else if (inputAdivina < random) {
      setMensaje('El número es más alto.')
    } else {
      setMensaje('El número es más bajo.')
    }
  }*/