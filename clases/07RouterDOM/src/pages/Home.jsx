import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h3>Home - Aprendiendo React-Router-DOM</h3>
            <p>Navega a la sección de Planetas para empezar</p>
            <Link to="/planets">Ver Planetas</Link>
        </div>
    )
}

export default Home