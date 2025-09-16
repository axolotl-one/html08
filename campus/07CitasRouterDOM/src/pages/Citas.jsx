import { useState } from "react"
import { Link } from 'react-router-dom'

const Citas = () => {
  const [listaCitas, setListaCitas] = useState([]);
  const [idCita, setIdCita] = useState(1000);
  const [inputConsulta, setInputConsulta] = useState('');
  const [inputPaciente, setInputPaciente] = useState('');
  const [inputFecha, setInputFecha] = useState('');

  
  const capturaInfo = () => {
    if(inputConsulta==='' || inputPaciente==='' || inputFecha==='') return;
    setListaCitas([...listaCitas, {id:idCita, fecha:inputFecha, paciente:inputPaciente, consulta:inputConsulta}])
    setIdCita(idCita + 1)
    setInputConsulta('');
    setInputPaciente('');
    setInputFecha('');
  }
  
  
  
  return (
    <div>
      <h1>Agendar Cita</h1>
      <form onSubmit={ (e) => {e.preventDefault(); capturaInfo()}}>
        <input type="text" value={inputPaciente} onChange={(e) => {setInputPaciente(e.target.value)}} placeholder="Nombre del Paciente"/>
        <input type="date" value={inputFecha} onChange={(e) => {setInputFecha(e.target.value)}}/>
        <select value={inputConsulta} onChange={(e) => {setInputConsulta(e.target.value)}}>
            <option value="">--SELECCIONAR MOTIVO--</option>
            <option value="gen">Revisión</option>
            <option value="ecg">Electrocardiograma</option>
            <option value="rad">Radioscopía</option>
            <option value="san">Sanguineo</option>
            <option value="vis">Vista</option>
            <option value="otr">Otro</option>
        </select>
        <input type="submit" value="Registrar"/>
      </form>
      <section>
        <h3>Consultas Registradas</h3>
        {listaCitas.map((cita, index)=>(
          <div>
            <p>Cita del paciente {cita.paciente} programada para: {cita.fecha}</p>
            <Link to={'/citas/'+cita.id} key={index}>
              Consultar Folio
            </Link>
            {/* TODO: Crear un JSON para almacenar la lista de citas y ejecutarlas desde InfoConsulta*/}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Citas