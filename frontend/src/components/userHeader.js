import React from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserHeader = () => {
  return (
    <div className="userMenu">
      <Row>
        <Col sm="8">
          <ul>
            <li>
              <a href="/header">
                <img width="40px" height="40px" alt="logo" src="images/1.png" />
              </a>
            </li>
            <li>
              <a href="/user">Dashbord</a>
            </li>
            <li>
              <a href="/signin">Message</a>
            </li>
            <li>
              <a href="/signin">Order</a>
            </li>
            <li>
              <a href="/signin">Gigs</a>
            </li>
            <li>
              <a href="/signin">Analytics</a>
            </li>
            <li>
              <a href="/signin">Earnings</a>
            </li>
            <li>
              <a href="/signin">Comunity</a>
            </li>
            <li>
              <a href="/buyer-request">Buyer Request</a>
            </li>
          </ul>
        </Col>
        <Col sm="2">
          <ul>
            <li>
              <a href="/">Switch to Buying</a>
            </li>
          </ul>
        </Col>
        <Col>
          <img
            width="35px"
            height="35px"
            className="userimg"
            alt="userimages"
            src="images/1.png"
          />
          </Col>
          <Col>
          <NavDropdown title=" " id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/signin">
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          </Col>
          <Col>
          <p className="btnnn">$20</p>
          </Col>
        
      </Row>
    </div>
  );
};
export default UserHeader;
