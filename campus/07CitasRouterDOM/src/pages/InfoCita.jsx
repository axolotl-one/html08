import { useParams, useNavigate } from 'react-router-dom'

const InfoCita = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const irAtras = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>El folio de esta cita es: {id}</h3>
            <button onClick={irAtras}>Regresar</button>
        </div>
    )
}

export default InfoCita