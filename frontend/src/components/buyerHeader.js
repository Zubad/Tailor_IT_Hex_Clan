import React from 'react';
import {Row, Col, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const BuyerHeader = () =>{
    return(
        <div className="userMenu">
            <Row>
                <Col sm='10'>
                    <ul>
                        <li><a href='/'><img /></a></li>
                        <li><a href='/'>Dashboard</a></li>
                        <li><a href='/'>Messages</a></li>
                        <li><a href='/'>Orders</a></li>
                        <li><a href='/'>Analytics</a></li>
                        <li><a href='/'>Community</a></li>
                        <li><a href='postajob'>Post a Request</a></li>
                        <li><a href='mypost'>My Post</a></li>
                    </ul>
                </Col>
                <Col sm='2'>
                    <ul>
                        <li>
                            <img width='35px' height='35px' className='userimg' alt='UserImg' src='images/picsi.jpg'/>
                        </li>
                        <NavDropdown title=' ' id='username'>
                            <LinkContainer to='/profile'>
                            <NavDropdown.Item>
                                Profile
                            </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <NavDropdown.Item>
                                    Logout
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default BuyerHeader;