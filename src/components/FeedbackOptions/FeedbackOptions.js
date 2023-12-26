import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <div className="feedback">
      {keys.map(option => {
        console.log(option);
        return (
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
