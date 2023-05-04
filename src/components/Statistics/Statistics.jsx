import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li key={'good'} className={css.listItem}>
        Good: {good}
      </li>
      <li key={'neutral'} className={css.listItem}>
        Neutral: {neutral}
      </li>
      <li key={'bad'} className={css.listItem}>
        Bad: {bad}
      </li>
      <li key={'total'} className={css.listItem}>
        Total: {total}
      </li>
      <li key={'positivePercentage'} className={css.listItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
