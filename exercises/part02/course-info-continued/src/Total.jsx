const Total = ({ course }) => (  
  <>
    <h3>Total Number of Exercises: </h3>
    <h1>
      {course.parts.reduce((total, part) => 
        total + part.exercises, 0
      )}
    </h1>
  </>
);

export default Total