import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

function Contact(){
    return (
        <section className="contact" id="cont">
            <h2 className="sectionHeader">Contact</h2>

            <Container>
                <Row>
                    <Col sm={6}>
                        <p><b>mail</b>: mpruchniak(at)gmail.com</p>
                    </Col>
                    <Col sm={6}>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact