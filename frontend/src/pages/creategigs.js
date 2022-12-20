import React from "react";
import UserHeader from "../component/userHeader";
import { Button, Form, Card, Col, Row, Container } from "react-bootstrap";
import { Chip, Autocomplete, makeStyles, TextField } from "@mui/material";

const Creategigs = () => {
  return (
    <div className="mainnnn">
      <UserHeader />
      <div className="creategig">
        <Form>
          <Container>
            <Card style={{ width: "70rem" }}>
              <Card.Body>
                <Row className="bnm">
                  <Col sm="3">GIG TITLE</Col>
                  <Col className="bnm" sm="9">
                    <Form.Control placeholder="i will"></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">CATEGORY</Col>
                  <Col className="bnm">
                    <Form.Group as="select">
                      <Form.Control as="select">
                        <option>Choose</option>
                        <option>Programing</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="bnm">
                    <Form.Group as="select">
                      <Form.Control as="select">
                        <option>advance</option>
                        <option>Modrate</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3"> Service Type </Col>
                  <Col className="bnm">
                    <Form.Group as="select">
                      <Form.Control as="select">
                        <option>advance</option>
                        <option>Modrate</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="bnm">
                    <Form.Group as="select">
                      <Form.Control as="select">
                        <option>Full Website creation</option>
                        <option>customiztion</option>
                        <option>Bugfix</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">GIG META</Col>
                  <Col sm="9" className="bnm">
                    <div className="Tworowborder">
                      <Row>
                        <Col className="borderrowone" sm="3">
                          PLATFORM
                        </Col>
                        <Col sm="9">Selct Platform</Col>
                      </Row>
                      <Row>
                        <Col className="borderrowone" sm="3"></Col>
                        <Col className="radiobtn">
                          <Row>
                            <Col>
                            <input type="radio" id="other" name="radio" value="JavaScript"/>
                            <label htmlFor="radio1">JavaScript</label>
                            </Col>
                            <Col>
                            <input type="radio" id="other" name="radio" value="React"/>
                            <label htmlFor="radio1">React</label>
                            </Col>
                          </Row>
                          <br/>
                          <Row>
                            <Col>
                            <input type="radio" id="other" name="radio" value="Nodejs"/>
                            <label htmlFor="radio1">Node</label>
                            </Col>
                            <Col>
                            <input type="radio" id="other" name="radio" value="PHP"/>
                            <label htmlFor="radio1">PHP</label>
                            </Col>
                          </Row>
                          <br/>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">Search Tags</Col>
                  <Col className="bnm">
                  <Autocomplete 
                  multiple
                  id="tags-filled"
                  option={top10.map((Option)=>option.title)}
                  freeSolo
                  renderTags={(value,getTagProps)=>
                    value.map((option,index)=>(
                      <Chip variant="outlined" label={option}{...getTagProps({index})}/>
                    ))
                  }
                  renderInput={(params)=(
                    <TextField {...params}
                    variant="filled" pal
                  )}
                  />
                  </Col>

                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Form>
      </div>
    </div>
  );
};

export default Creategigs;
