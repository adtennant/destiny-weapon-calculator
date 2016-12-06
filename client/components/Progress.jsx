import React, { PropTypes } from 'react';

export const Progress = ({ label, value, min, max }) => (
    <div className="progress">
        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={ value } aria-valuemin={ min } aria-valuemax={ max } style={ { width: value + '%' } }>
            { label && <span className="sr-only">{ value }</span> }
        </div>
    </div>
);

Progress.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
};

Progress.defaultProps = {
    label: null,
    value: 0,
    min: 0,
    max: 0
};

export default Progress;

