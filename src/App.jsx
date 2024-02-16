import React, { useState, useEffect } from "react";
import css from "./App.module.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";

const STORAGE_KEY = "stats";

export default function App() {
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

  const onBtnClick = ({ target }) => {
    const { name } = target;

    setState((prevState) => ({
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
      <Section title={"Sip Happens Café"} />
      <Notification
        message={
          <p>
            Please leave your feedback about our service by selecting one of the
            options below.
          </p>
        }
      />
      <FeedbackOptions
        options={state}
        onLeaveFeedback={onBtnClick}
        onReset={onReset}
        resetShow={!isNotificationShow()}
      />{" "}
      <Section title={"Statistics"} />
      {isNotificationShow() ? (
        <Notification message={"No feedback yet"} />
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
}
