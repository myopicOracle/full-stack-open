import StatisticLine from "./StatisticLine";

const Statistics = ({ rating, all, average, positive }) => {
  if (all) {
    return (
      <>
        <table>
          <th>
            <tr>
              <td><StatisticLine text="good" rating={rating.good} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="neutral" rating={rating.neutral} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="bad" rating={rating.bad} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="all" rating={all} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="average" rating={average} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="positive" rating={positive} /></td>
            </tr>
          </th>
        </table>
        {/* {console.log(rating.good, rating.neutral, rating.bad, rating, setStatisticLine)} */}
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistics;
