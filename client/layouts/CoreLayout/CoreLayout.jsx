import React, { PropTypes } from 'react';
import { Container, Row, Col } from 'components';
import { Header, Footer } from './components';

export const CoreLayout = ({ children }) => (
    <div>
        <Header/>
        <Container>
            <Row>
                <Col xs={ 12 }>
                    { children }
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
);

CoreLayout.propTypes = {
    children: PropTypes.node
};

CoreLayout.defaultProps = {
    children: null
};

export default CoreLayout;