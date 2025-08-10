function Tarjeta({nombre = "Ana Peréz", profesion = "Desarrolladora Web", mensaje = "Hola, Mundo"}) {
    // Retornamos el JSX que representa la tarjeta
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
            {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
            <h1>Tarjeta de Presentación</h1>
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>
        </div>
    );
}

export default Tarjeta;