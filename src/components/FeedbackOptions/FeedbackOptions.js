import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)} key={option} name={option}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propeTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
