import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Planets = () => {
  const [planetas, setPlanetas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlanetas = async () => {
      try {
        const response = await fetch('https://images-api.nasa.gov/search?q=planets&page_size=12')
        const data = await response.json()
        setPlanetas(data.collection.items)
      } catch (error) {
        console.error('Error al obtener los planetas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlanetas()
  }, [])

  if (loading) return <p>Cargando planetas...</p>

  return (
    <div>
      <h1>Planetas</h1>
      <div>
        {planetas.map((planeta) => (
          <Link to={'/planets/' + planeta.data[0].keywords[0]} key={planeta.data[0].nasa_id} >
            <img src={planeta.links[0].href} alt={planeta.name} />
            <h3>{planeta.data[0].title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Planets