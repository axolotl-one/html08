import { useState } from 'react'
import './App.css'
import Articulo from './components/Articulo'

function App() {
  {/* Estados */}
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  
  const handleAdd = (e) => {
    e.preventDefault()
    setTasks([...tasks, inputValue])
    setInputValue('')
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_,i) => i !== index)
    setTasks(newTasks)
  }


  return (
    <>
      <h1>Lista de Compras</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Agrega un nuevo artículo a la lista"
          value={inputValue}
          autoComplete='off'
          minLength={2}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <input
          type='submit'
          value={"Agregar"}
        />
      </form>
      {/*ul>li{Item $}*3>button{borrar}*/}
      <ul>
        {tasks.map((task,index)=>(
          <Articulo key = {index} nombre = {task} handleDelete = {() => deleteTask(index)}/>
        ))}
      </ul>
    </>
  )
}

export default App
