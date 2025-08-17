const MensajeTenario = ({captura, valor, intentos}) => {
  return (
    <h3>
      Respuesta con Operadores Ternarios:
      {captura === valor
        ?<i> ¡Haz adivinado el número en {intentos} intentos!</i>
        : captura < valor
        ?<i> El número es mayor que {captura}</i>
        :<i> El número es menor que {captura}</i>}
    </h3>
  )
}

export default MensajeTenario