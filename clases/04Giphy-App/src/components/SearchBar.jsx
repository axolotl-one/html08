import { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className='search-bar'>
      <input
        className='search-input'
        type='text'
        placeholder='Buscar Gifs...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className='search-button'
        onClick={() => { handleSearch(searchTerm); setSearchTerm('') }}
      >
        Buscar
      </button>
    </div>
  )
}
export default SearchBar