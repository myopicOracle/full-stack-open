const Rating = ({ text, rating }) => (
  <p>
    {text} {rating}
  </p>
);

const Statistics = ({ rating, all, average, positive }) => {
  if (all) {
    return (
      <>
        <Rating text="good" rating={rating.good} />
        <Rating text="neutral" rating={rating.neutral} />
        <Rating text="bad" rating={rating.bad} />
        <Rating text="all" rating={all} />
        <Rating text="average" rating={average} />
        <Rating text="positive" rating={positive} />
        {/* {console.log(rating.good, rating.neutral, rating.bad, rating, setRating)} */}
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
