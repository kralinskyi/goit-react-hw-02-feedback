import React, { Component } from 'react';
import css from './App.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const positive = (Number(good) + Number(neutral)) / Number(total);

    const positivePercentage = parseFloat(positive * 100).toFixed();
    return positivePercentage;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={css.container}>
        <div>
          <h2 className="title">Please leave feedback</h2>
        </div>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onBtnClick}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}

export default App;
