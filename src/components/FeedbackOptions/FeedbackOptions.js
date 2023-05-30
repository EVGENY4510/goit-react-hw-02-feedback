import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(name => (
        <button key={name} name={name} onClick={onLeaveFeedback} type="button">
          {name}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
