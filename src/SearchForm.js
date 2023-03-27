import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {searchTerm, setSearchTerm} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search hacker news</h2>
      <input type="text" className="form-input" onChange={(e) => setSearchTerm(e.target.value)} />
    </form>
  )
}

export default SearchForm
