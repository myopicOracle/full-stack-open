const Form = ({ handleSubmit, newName, handleName, newPhone, handlePhone }) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      name:
      <input type="text" value={newName} onChange={handleName} required />
    </div>
    <div>
      phone:
      <input type="tel" value={newPhone} onChange={handlePhone} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default Form
