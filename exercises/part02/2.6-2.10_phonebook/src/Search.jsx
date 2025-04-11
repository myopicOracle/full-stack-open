const Search = ({handleSearch}) => {
  return(
    <>
      <h3>
        <strong>Search by name: </strong>
      </h3>
      <input type="text" onChange={handleSearch} />
    </>
  )
}

export default Search