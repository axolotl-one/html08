import React, { useState, useEffect, useMemo } from 'react';
import './App.css'
import Tarea from './components/Tarea';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');



  // Cálculo de tiempo total optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log("Calculando tiempo total...");
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]); // Solo se recalcula cuando cambian las tareas

  // Función para agregar una nueva tarea
  const agregarTarea = (e) => {
    e.preventDefault();
    if(!nuevaTarea || !duracion) {return}
    const nuevaTareaObj = {
      nombre: nuevaTarea,
      duracion: parseInt(duracion)
    };
    setTareas([...tareas, nuevaTareaObj]);
    setNuevaTarea('');
    setDuracion('');
  };

  // Cronometro de Ejecución (NUEVO)
  const ejecutarTarea = (index, segundos) => {
      if(segundos<0) return;
      segundos--
      setTimeout(() => {
        const nuevo = tareas.map((tarea, i) => i !== index? tarea: {nombre: tarea.nombre, duracion: tarea.duracion--})
        setTareas(nuevo)
      }, segundos*1000);
      ejecutarTarea(index, segundos)
  }

  
  // Eliminar Tarea
  const eliminarTarea = (index) => {
    const newTasks = tareas.filter((_,i) => i !== index)
    setTareas(newTasks)
  }

  // Efecto secundario: Actualizar el título del documento cada vez que cambia el total
  useEffect(() => {
    document.title = calcularTiempoTotal + " s | "+ tareas.length+" tareas";
  }, [calcularTiempoTotal, tareas]) // Se ejecuta cada vez que las tareas cambian

  return (
    <div>
      <h1>Contador de Tareas</h1>
      <form onSubmit={agregarTarea}>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number"
          inputMode='numeric'
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en segundos" 
        />
        <input
          type='submit'
          value='Agregar Tarea'
        />
      </form>

      <h2>Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <Tarea key={index}
            nombre={tarea.nombre}
            duracion={tarea.duracion}
            ejecucion={()=>ejecutarTarea(index, tarea.duracion)}
            eliminacion={()=>eliminarTarea(index)}/>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} segundos</h3>
    </div>
  );
}

export default App;