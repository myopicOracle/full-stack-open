import Part from "./Part"

const Content = ({ course }) => (
  <div>
    <Part modules={course.parts} />
  </div>
)

export default Content