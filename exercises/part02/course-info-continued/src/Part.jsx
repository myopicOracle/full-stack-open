const Part = ({ modules }) => (
  <ul>
    {modules.map((item) => (
      <li key={item.id}>
        <strong>Course Name: </strong> {item.name} <br />
        <strong># of Exercises: </strong> {item.exercises}
      </li>
    ))}
  </ul>
)

export default Part