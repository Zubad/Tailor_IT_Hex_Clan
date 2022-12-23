import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";


function Header() {
  const [navbar, setNavbar] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "nn active" : "nn"}>
      <div> 
        <Row className="containerh">
          <Col className="colOne">
            <FontAwesomeIcon
              icon={faBars}
              size="2px"
              color={navbar ? "black" : "white"}
              id="baricon"
            />
            <div className="nm">
              <div className={navbar ? "disactive" : "logo"}>
                <img alt="mainLogo" src="../images/imgOne.jpg" />
              </div>
            </div>
            <div className={navbar ? "logo" : "disactive"}>
              <img alt="mainLogoSecond" src="../images/image2.jpg" />
            </div>
            <div className={navbar ? "searchBar" : "searchBar searchBarHide"}>
              <Form inline>
                <img
                  className="searchLogo"
                  alt="seacrh logo"
                  src="../images/search.png"
                />
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-lg-0"
                />
                <button className="btnn">Search</button>
              </Form>
            </div>
          </Col>
          <ul className="navigation">
            <li className="ll">
              <a className={navbar ? "linkColor" : "disactiveLink"} href="/">
                Tailors
              </a>
            </li>
            <li className="sli">
              <a className={navbar ? "linkColor" : "disactiveLink"} href="/">
                Explor
              </a>
            </li>
            <li className="sli">
              <a className={navbar ? "linkColor" : "disactiveLink"} href="/">
                <span className="global">
                  <img
                    alt="globe img"
                    src="../images/globe.png"
                    width="25px"
                    height="25px"
                    color="green"
                  />
                </span>
                <span>English</span>
              </a>
            </li>
            <li className="tli">
              <a className={navbar ? "linkColor" : "disactiveLink"} href="/">
                Join The Best Tailors
              </a>
            </li>
            <li className={navbar ? "signInLink linkColor" : "disactiveLink"}>
              <a href='signin'>Sign In</a>
            </li>
            <li className="bli">
              <a href="/join">
                <Button variant="success">Join</Button>{" "}
              </a>
            </li>
          </ul>
        </Row>
      </div>
    </div>
  );
}

export default Header;
