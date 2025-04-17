const Search = ({searchInput, handleSearch}) => {
  return(
    <>
      <h3>
        <strong>Search by name: </strong>
      </h3>
      <input type="text" value={searchInput} onChange={handleSearch} />
    </>
  )
}

export default Search