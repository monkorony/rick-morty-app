import React from 'react'

const Search = ({charSearch, setCharSearch, setPageNumber}) => {

  const handleChange = (e) => {
    setCharSearch(e.target.value);
    setPageNumber(1)
  }

  const seachButton = (e) => {
    e.preventDefault();
  }
  return (
    <div className="mb-3">
      <form >
        <input 
          onChange={handleChange} 
          type='text' 
          placeholder='Search for a character'
          value={charSearch} 
          className="form-control"
        />
        <button onClick={seachButton} className='btn btn-primary my-2'>Search</button>
      </form>
    </div>
  )
}

export default Search
