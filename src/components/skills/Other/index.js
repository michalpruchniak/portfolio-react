import React from 'react'
import Img from './img'
import Skills from './skills'
import { Row, Col } from 'react-grid-system'


const Frontend = () => {
    return (
        <Row>
            <Col xs={0} md={4} lg={3}>
                <Img />
            </Col>
            <Col xs={12} md={8} lg={9}>
                <Skills />
            </Col>
        </Row>
    );
}

export default Frontend