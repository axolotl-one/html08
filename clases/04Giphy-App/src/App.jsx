import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [gifs, setGifs] = useState([])
  const [busqueda, setBusqueda] = useState("Gifs en tendencia")
  const APIKEY = import.meta.env.VITE_GIPHY_APIKEY 

  
  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key="+APIKEY+"&limit=15&offset=0&rating=g&bundle=messaging_non_clips")
        const results = await response.json()
        setGifs(results.data)
      } catch (error) {
        console.error('Error fetching GIFs:', error)
      }
    }

    fetchGifs()
  }, [])

  const sendSearch = async (searchWord) => {
    try {
      const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key="+APIKEY+"&q="+searchWord+"&limit=15&offset=0&rating=g&lang=es&bundle=messaging_non_clips")
      const results = await response.json()
      setBusqueda("Gifs de " + searchWord)
      setGifs(results.data)
    } catch (error) {
      setBusqueda("Error: " + error)
      console.error('Error fetching GIFs:', error)
    }
  }

  return (
    <>
      <header><h1>Buscador de Gifs con Giphy API-KEY</h1></header>
      <main className='App'>
        <SearchBar handleSearch={sendSearch}/>
        <h2>{busqueda}</h2>
        <div className='grid-cards'>
          {gifs.map(gif => (
            <ImageCard
              key={gif.id}
              url={gif.images.fixed_height.url}
              title={gif.title}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
