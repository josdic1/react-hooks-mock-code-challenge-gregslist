import { useState } from 'react';

function Search({ onFilter }) {

const [ searchVal, setSearchVal ] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onFilter(searchVal)
    setSearchVal('')
    console.log("submitted");
  }

  const onSearchInput = (e) => {
    const { value } = e.target
    setSearchVal(value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchVal}
        onChange={onSearchInput}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
