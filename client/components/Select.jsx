import React, { PropTypes } from 'react';

export const Select = ({ id, selected, options, onChange }) => (
    <select id={ id } selected={ selected } className="form-control" onChange={ e => onChange(e.target.value) }>
        { options.map(option => <option key={ option.value } value={ option.value }>{ option.label }</option>) }
    </select>
);

Select.PropTypes = {
    Option: PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })
};

Select.PropTypes.Options = PropTypes.arrayOf(Select.PropTypes.Option);

Select.propTypes = {
    id: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    options: Select.PropTypes.Options.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Select;