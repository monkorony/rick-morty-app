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
    <div>
      <form >
        <input 
          onChange={handleChange} 
          type='text' 
          placeholder='search for a character'
          value={charSearch} 

        />
        <button onClick={seachButton} className='btn btn-primary'>Search</button>
      </form>
    </div>
  )
}

export default Search
