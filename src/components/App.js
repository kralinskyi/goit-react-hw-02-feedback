import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const STORAGE_KEY = 'stats';

const App = () => {
  const [state, setState] = useState(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData !== null) {
      return JSON.parse(savedData);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const onBtnClick = event => {
    const { name } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = state;
    const total = good + bad + neutral;
    return total;
  };

  const isNotificationShow = () => {
    const { good, bad, neutral } = state;
    return !good && !neutral && !bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = state;
    const total = good + bad + neutral;
    const positive = (Number(good) + Number(neutral)) / Number(total) || 0;

    const positivePercentage = parseFloat(positive * 100).toFixed();
    return positivePercentage;
  };

  const onReset = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.container}>
      <Section title={'Sip Happens Café'} />
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <FeedbackOptions
        options={state}
        onLeaveFeedback={onBtnClick}
        onReset={onReset}
        resetShow={!isNotificationShow()}
      />{' '}
      <Section title={'Statistics'} />
      {isNotificationShow() ? (
        <Notification message={'No feedback yet'} />
      ) : (
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
};

export default App;
