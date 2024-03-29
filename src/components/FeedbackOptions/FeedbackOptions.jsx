import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback, onReset, resetShow }) => {
  const keys = Object.keys(options);

  return (
    <div className={css.feedback}>
      {keys.map((option) => {
        return (
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
            className={css.btn}>
            {option}
          </button>
        );
      })}
      {resetShow && (
        <button type="button" className={css.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default FeedbackOptions;
