import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statistics}>
      <li className={css.item}>good: {good}</li>
      <li className={css.item}>neutral: {neutral}</li>
      <li className={css.item}>bad: {bad}</li>
      <li className={css.item}>total: {total}</li>
      {total ? (
        <li className={css.item}>positive: {positivePercentage} %</li>
      ) : null}
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};
