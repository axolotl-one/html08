// Planeta.jsx
import { useEffect } from 'react';

function Planeta({ nombre }) {
  useEffect(() => {
    console.log("¡El planeta " + nombre + " ha aparecido!"); // Montaje

    return () => {
      console.log("¡El planeta " + nombre + " ha desaparecido!"); // Desmontaje
    };
  }, [nombre]);

  return <div>{nombre}</div>;
}

export default Planeta;