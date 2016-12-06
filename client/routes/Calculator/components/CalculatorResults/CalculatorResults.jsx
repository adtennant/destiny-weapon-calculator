import React, { PropTypes } from 'react';
import { CalculatorResultsRow } from './components';

export const CalculatorResults = ({ results }) => (
    <div>
        { results.map(stat => <CalculatorResultsRow key={ stat.statHash } name={ stat.statName } value={ stat.value } min={ stat.minimum } max={ stat.maximum } showBar={ stat.statHash !== 3871231066 }/>) }   
    </div>
);

CalculatorResults.PropTypes = {
    Stat: PropTypes.shape({
        statHash: PropTypes.number.isRequired,
        statName: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        minimum: PropTypes.number.isRequired,
        maximum: PropTypes.number.isRequired,
    })
};

CalculatorResults.PropTypes.Stats = PropTypes.arrayOf(CalculatorResults.PropTypes.Stat);

CalculatorResults.propTypes = {
    results: CalculatorResults.PropTypes.Stats.isRequired
};

export default CalculatorResults;

