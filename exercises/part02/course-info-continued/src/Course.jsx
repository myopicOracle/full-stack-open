import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header courseTitle={course.name} />
          <Content course={course} />
          <Total course={course}/>
        </div>
      ))}
    </>
  )
}

export default Course