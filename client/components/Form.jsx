import React, { PropTypes } from 'react';

export const Form = ({ children }) => (
    <form>{ children }</form>
);

Form.propTypes = {
    children: PropTypes.node
};

Form.defaultProps = {
    children: null
};

export default Form;

