import React, { PropTypes } from 'react';
import { Col, Progress, Row } from 'components';
import styles from './CalculatorResultsRow.css';

export const CalculatorResultsRow = ({ name, value, min, max, showBar }) => (
    <Row>
        <Col xs={ 4 } className={ styles.label }>
            <span><strong>{ name }</strong></span>
        </Col>
        { 
            showBar && <div>
                <Col xs={ 4 } className={ styles.bar }>
                    <Progress value={ value } min={ 0 } max={ 100 } label={ value.toString() }/>
                </Col>
                <Col xs={ 4 }>
                    <span>{ value }</span>&nbsp; <span>({ min }/{ max })</span>
                </Col>
            </div> 
        }
        { 
            !showBar && <Col xs={ 8 } className={ styles.bar }>
                <span>{ value }</span>
            </Col> 
        }
    </Row>
);

CalculatorResultsRow.propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    showBar: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired
};

CalculatorResultsRow.defaultProps = {
    max: 100,
    min: 0,
    name: '',
    showBar: true,
    value: 0
};

export default CalculatorResultsRow;