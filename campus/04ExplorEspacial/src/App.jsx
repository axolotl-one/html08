import { useState, useEffect } from 'react';
import Planeta from './components/Planeta';
import './App.css'
function App() {
  // ... (estado)
  const [velocidad, setVelocidad] = useState(10)
  const [distancia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  const [planetasVisitados, setPlanetasVistados] = useState([])
  const [estadoNave,  setEstadoNave] = useState("Aterrizar")


  
  useEffect(() => {
    if(estadoNave==="Aterrizar") return
    if(combustible<velocidad/10) return
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"]
      const distPlanetas = [58, 108, 150, 228, 778, 1400, 2871, 4495]
  
      setCombustible(combustible-(velocidad/10))
      setDistancia(distancia+velocidad)
      if(distancia>distPlanetas[planetasVisitados.length]){
          setPlanetasVistados([... planetasVisitados,planetas[planetasVisitados.length]])
      }
      // ... (simulación de vuelo)
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, [combustible,distancia,estadoNave,velocidad,planetasVisitados]);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  //const mensajeEstado = useMemo(() => {
  //  return `Estado: ${estadoNave}`;
  //}, [estadoNave]);

  const cambiarEstadoNave = () =>{
    estadoNave==="Orbitar"?setEstadoNave("Aterrizar"):setEstadoNave("Orbitar")
  }


  return (
    <div>
      <h1>Exploración Espacial</h1>
      <label htmlFor="vel">
        Velocidad: 
        <input id="vel" type="number" inputMode="numeric" value={velocidad} minLength={1} max={99} onChange={(e)=>{setVelocidad(parseInt(e.target.value))}}/> 
        millones de km/s
      </label>
      <p>{estadoNave==="Orbitar"?"Nave en Orbita":"Nave en Base"}</p>
      <button onClick={cambiarEstadoNave}>{estadoNave==="Orbitar"?"Aterrizar":"Orbitar"}</button>
      <p>Combustible: {combustible} Litros</p>
      <p>Distancia recorrida: {distancia},000,000 km</p>
      {/* ... (información del panel) */}
      {planetasVisitados.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}
    </div>
  );
}

export default App
