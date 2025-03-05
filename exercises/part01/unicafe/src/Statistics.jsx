import StatisticLine from "./StatisticLine";

const Statistics = ({ rating, all, average, positive }) => {
  if (all) {
    return (
      <>
        <StatisticLine text="good" rating={rating.good} />
        <StatisticLine text="neutral" rating={rating.neutral} />
        <StatisticLine text="bad" rating={rating.bad} />
        <StatisticLine text="all" rating={all} />
        <StatisticLine text="average" rating={average} />
        <StatisticLine text="positive" rating={positive} />
        {/* {console.log(rating.good, rating.neutral, rating.bad, rating, setStatisticLine)} */}
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
