import React, { PropTypes } from 'react';

export const FormGroup = ({ children }) => (
    <div className="form-group">{ children }</div>
);

FormGroup.propTypes = {
    children: PropTypes.node
};

FormGroup.defaultProps = {
    children: null
};

export default FormGroup;

