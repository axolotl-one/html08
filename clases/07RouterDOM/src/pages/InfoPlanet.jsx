import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const InfoPlanet = () => {
  const { name } = useParams()
  const navigate = useNavigate()

  const [planeta, setPlaneta] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPlaneta = async () => {
      try {
        const response = await fetch('https://images-api.nasa.gov/search?q=' + name + '&page_size=12')
        const data = await response.json()
        setPlaneta(data.collection.items)
      } catch (error) {
        console.error('Error al obtener el detalle del personaje:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPlaneta()
  }, [name])

  const handleGoBack = () => {
    navigate('/planets')
    // También podrías usar navigate(-1) para regresar a la página anterior
  }

  if (loading) return <p>Cargando detalle...</p>
  if (!planeta) return <p>Planeta no encontrado.</p>

  return (
    <div>
      {planeta.map((info) => (
            <div key={info.data[0].nasa_id}>
                <img src={info.links[0].href} alt={info.name} />
                <h3>{info.data[0].title}</h3>
                <p>{info.data[0].description}</p>
            </div>
        ))}
      <button onClick={handleGoBack} className='btn-back'>Volver a Planetas</button>
    </div>
  )
}

export default InfoPlanet