import React from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onBadBtnClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return (this.state.good / total) * 100 || 0;
  };

  render() {
    return (
      <div className={css.feedback}>
        <p>Please leave feedback</p>
        <div className={css.btnField}>
          <button
            type="button"
            name="good"
            className={css.btnGood}
            onClick={this.onGoodBtnClick}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            className={css.btnNeutral}
            onClick={this.onNeutralBtnClick}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            className={css.btnBad}
            onClick={this.onBadBtnClick}
          >
            Bad
          </button>
        </div>
        <h1 className={css.statsHeader}>Statistics</h1>

        <ul className={css.statisticsList}>
          <li className={css.statisticsListItem}>
            Good: <span>{this.state.good}</span>
          </li>
          <li className={css.statisticsListItem}>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li className={css.statisticsListItem}>
            Bad: <span>{this.state.bad}</span>
          </li>
          <li className={css.statisticsListItem}>
            Total: <span>{this.countTotalFeedback()}</span>
          </li>
          <li className={css.statisticsListItem}>
            Positive Feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage().toFixed()} %</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
