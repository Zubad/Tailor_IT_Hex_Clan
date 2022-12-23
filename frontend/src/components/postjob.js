import React from 'react';
import {Button, Form, Col, Container, Row} from 'react-bootstrap';
import BuyerHeader from './buyerHeader';


function Postjob(){
    return(

    <div>
        <BuyerHeader/>
        <Container>
            <Form>
                <h3>Which Stitching Service you are looking?</h3>
                <Row>
                    <Col sm='8'>
                    <h5>Please provide Details</h5>
                    <Form.Control as='textarea' rows={5} placeholder='I am lookin got .....'></Form.Control>
                    </Col>
                </Row>
                <br/>
                <h3>
                    Choose a Category:
                </h3>
                <Row>
                <Col sm='4'>
                        <Form.Control as='select'>
                            <option>Men's </option>
                            <option>Women's</option>
                        </Form.Control>
                    </Col>
                    <Col sm='4'>
                        <Form.Control as='select'>
                            <option>Master Tailor </option>
                            <option>Average Tailor</option>
                        </Form.Control>
                    </Col>
                </Row>
                <br/>
                <h3>
                    Once the Order is placed, When would you like to receive your product?
                </h3>
                <Row>
                    <Col>
                        <input type='number' min='1' max='60' />
                    </Col>
                </Row>
                <br/>
                <h3>
                    What is your Budget
                </h3>
                <Row>
                    <Col sm='7'>
                        <input type='number' min='200' max='15000' /> Rs.
                    </Col>
                    <Col sm='3'>
                        <Button type='submit' variant='success'>Post</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    </div>
    )
}
export default Postjob;