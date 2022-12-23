import React from 'react';
import {Button, Form, Col, Container, Row, Card, ListGroup} from 'react-bootstrap';
import BuyerHeader from './buyerHeader';
function MyPost(){
    return(
        <div>
            <BuyerHeader/>
            <Container>
                <br/>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <h6>Active Post</h6>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col sm='2'>Date</Col>
                                <Col sm='4'>Request</Col>
                                <Col sm='2'>Duration</Col>
                                <Col sm='2'>Budget</Col>
                                <Col sm='2'>Received Request</Col>
                            </Row>
                        </ListGroup.Item>
                        <div>
                            <ListGroup.Item>
                                <Row>
                                    <Col sm='2'>Dec 22, 2022</Col>
                                    <Col sm='4'>Title</Col>
                                    <Col sm='2'>Days</Col>
                                    <Col sm='2'>Price</Col>
                                    
                                    <Col sm='2'>Num of Received Requests</Col>
                                </Row>
                            </ListGroup.Item>
                        </div>
                    </ListGroup>
                </Card>
            </Container>
        </div>
    )
}
export default MyPost;