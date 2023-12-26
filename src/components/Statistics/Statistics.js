import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="statistics">
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      {total ? <li>positive: {positivePercentage} %</li> : null}
    </ul>
  );
};

export default Statistics;
