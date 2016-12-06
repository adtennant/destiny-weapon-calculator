import React from 'react';
import { Alert, Col, ExternalLink, Panel, Row } from 'components';
import { CalculatorInputView, CalculatorResultsView } from '../containers';

export const Calculator = () => (
    <Row>
        <Col xs={ 12 }>
            <Alert info>
                <p>I'm currently trying to gather data for all the perks that do not currently have data or have incorrect data.</p>
                <p>Please <ExternalLink to="https://github.com/adtennant/destiny-weapon-calculator/issues/new">create an issue on Github</ExternalLink> if you get results that are not the same as what you see in <ExternalLink to="https://chrome.google.com/webstore/detail/destiny-item-manager/apghicjnekejhfancbkahkhdckhdagna?hl=en">DIM</ExternalLink>, <ExternalLink to="https://www.patreon.com/IshtarCommander">Ishtar Commander</ExternalLink>, etc.</p> 
                <p>This will allow me to improve the calculator for everyone. Thanks.</p>
            </Alert>
        </Col>
        <Col xs={ 12 } md={ 6 } lg={ 5 } lgOffset={ 1 }>
            <CalculatorInputView/>
        </Col>
        <Col xs={ 12 } md={ 6 } lg={ 5 }>
            <Panel>
                <Panel.Body>
                    <CalculatorResultsView/>
                </Panel.Body>
            </Panel>
        </Col>
    </Row>
);

export default Calculator;