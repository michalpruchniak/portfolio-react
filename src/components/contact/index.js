import React from 'react'
import { Container, Row, Col } from 'react-grid-system'

function Contact(){
    return (
        <section className="contact" id="cont">
            <h2>Contact</h2>

            <Container>
                <Row>
                    <Col sm={6}>
                        <p><b>mail</b>: mpruchniak(at)gmail.com</p>
                        <p><b>phone:</b> 666 862 258</p>
                    </Col>
                    <Col sm={6}>
                        <a href="#">Download CV</a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact