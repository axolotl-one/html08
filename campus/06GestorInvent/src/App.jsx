import { useCallback, useReducer, useRef, useEffect } from 'react'
import { estadoInicial, productosReducer } from './reducers/productsReducer';
import './App.css'

function App() {
  const [state, dispatch] = useReducer(productosReducer, estadoInicial);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleAgregarProducto = () => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", nombre: inputRef.current.value });
      inputRef.current.value = ""; // Limpiar input
    }
  };

  const handleEnterInput = useCallback((e) => {
    if(e.key === 'Enter'){
      handleAgregarProducto();
    }
  },[])
  
  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  
  const handleResetear = useCallback(() => {
    dispatch({ type: "reset"});
  }, [])

  const puedeResetear = state.productos.length !== 0;
  
  const puedeDecrementar = ((unidades)=>{
    return unidades > 1;
  })

  const puedeIncrementar = ((unidades)=>{
    return unidades < 10;
  })

  return (
    <div>
      <h1>Gestor de Inventario</h1>
      <input ref={inputRef} type="text" placeholder="Nombre del producto" onKeyDown={(e) => {handleEnterInput(e)}}/>
      <input type="submit" onClick={handleAgregarProducto} value="Agregar Producto"/>
      {puedeResetear && <input type="reset" onClick={handleResetear} value="Borrar todo"/>}
      {/* Muestra el boton mientras "puedeResetear" sea true*/}
      <ul>
        {state.productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - Cantidad: {producto.unidades}
            {puedeIncrementar(producto.unidades) && <button onClick={() => handleIncrement(producto.id)}>+</button>}
            {puedeDecrementar(producto.unidades) && <button onClick={() => handleDecrement(producto.id)}>-</button>}
            <button onClick={() => dispatch({ type: "remove", id: producto.id })}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
