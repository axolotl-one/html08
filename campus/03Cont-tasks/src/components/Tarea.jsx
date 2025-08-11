const Tarea = ({nombre, duracion, ejecucion, eliminacion}) => {
    return (
        <li>
            {nombre}: {duracion===0?"Ejecutado":duracion}
            <span>
                <button className="delete-button" onClick={ejecucion}>
                    Ejecutar
                </button>
                <button className="delete-button" onClick={eliminacion}>
                    Eliminar
                </button>
            </span>
        </li>
    )
}

export default Tarea