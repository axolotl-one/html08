import React from 'react'

const Contacto = () => {
  return (
    <footer id="contacto">
      <div className="contenedor">
        <h2 className="titulo">Contáctanos</h2>
        <form action="" className="form">
          <input
            className="input"
            type="text"
            name=""
            id=""
            placeholder="Nombre"
          />
          <input
            className="input"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <textarea
            className="input"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Mensaje"
            defaultValue={""}
          />
          <input className="input" type="submit" defaultValue="Enviar" />
        </form>
      </div>
    </footer>
  )
}

export default Contacto