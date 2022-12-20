import React from 'react'
import {Col,Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'



const UserDetails = () => {
  return (
    <div className='userDetails'>
        <div className='userinfo'>
            <Container>
                <Row>
                    <Col xs lg="3">
                        <img width="90px" height="90px" alt='userimgae' src='images/1.png'/>
                    </Col>
                    <Col xs lg="6">
                        <h5>Qasim</h5>
                    </Col>
                    <Col xs lg="3">
                        <FontAwesomeIcon icon={faStar} size="1x" color="white"></FontAwesomeIcon>
                        N/A
                    </Col>
                </Row>
                <br/>
                <div className='line'></div>
                    <Row>
                        <Col xs lg="10">Respone</Col>
                        <Col xs lg="2">100%</Col>
                    </Row>
                    <Row>
                        <Col xs lg="10">Deliverd on time</Col>
                        <Col xs lg="2">100%</Col>
                    </Row>
                    <Row>
                        <Col xs lg="10">Order Completion</Col>
                        <Col xs lg="2">100%</Col>
                    </Row>
                    <div className='line'></div>
                    <Row>
                        <Col xs lg="10">Eaned</Col>
                        <Col xs lg="2">$100</Col>
                    </Row>
                    <Row>
                        <Col xs lg="10">Response time</Col>
                        <Col xs lg="2">5hrs</Col>
                    </Row>

                

            </Container>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      
    </div>
  )
}

export default UserDetails
