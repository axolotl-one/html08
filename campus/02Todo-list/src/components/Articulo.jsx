const Articulo = ({nombre, handleDelete}) => {
    return (
        <li>
            {nombre}
            <button className="delete-button" onClick={handleDelete}>
                Borrar
            </button>
        </li>
    )
}

export default Articulo