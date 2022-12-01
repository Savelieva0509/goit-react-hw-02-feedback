import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options}) => (
<div>
    <ul>
            <li>
                <button type="button" onClick={() => onLeaveFeedback(options[0])}>Good</button>
            </li>
            <li>
                <button type="button" onClick={() => onLeaveFeedback(options[1])}>Neutral</button>
            </li>
            <li>
                <button type="button" onClick={() => onLeaveFeedback(options[2])}>Bad</button>
            </li>
    </ul>  
        </div>
)

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;