import React, { Component } from 'react';

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

  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}

  render() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;
    const positive = (Number(good) + Number(neutral)) / Number(total);
    return (
      <>
        <div className="title-section">
          <h2 className="title">Please leave feedback</h2>
        </div>
        <div className="button-section">
          <button type="button" name="good" onClick={this.onBtnClick}>
            good
          </button>
          <button type="button" name="neutral" onClick={this.onBtnClick}>
            neutral
          </button>
          <button type="button" name="bad" onClick={this.onBtnClick}>
            bad
          </button>
        </div>
        <ul className="statistics-section">
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total: {total}</li>
          {total ? (
            <li>positive: {parseFloat(positive * 100).toFixed()} %</li>
          ) : null}
        </ul>
      </>
    );
  }
}

export default App;
