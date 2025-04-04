const Button = ({ onClick, text }) => {

  return (
    <button onClick={onClick}>
      {text}  
    </button>
  )

}

  // Simplified Arrow form
  // const Button = ({ onClick, text }) => (
  //   <button onClick={onClick}>
  //     {text}
  //   </button>
  // )

export default Button