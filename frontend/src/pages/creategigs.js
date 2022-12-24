import React from "react";
import UserHeader from "../components/userHeader";
import { Button, Form, Card, Col, Row, Container } from "react-bootstrap";
import { Chip, Autocomplete, TextField } from "@mui/material";
import {makeStyles} from '@mui/styles';

const Creategigs = () => {

  makeStyles((theme) => ({
    root:{
      '& > * + * ':{
        marginTop:theme.spacing(9),
      },
    },
  }))

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
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Choose</option>
                        <option>Stitching for Men</option>
                        <option>Stitching for Women</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Advance</option>
                        <option>Pro</option>
                        <option>Modrate</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3"> Service Type </Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Full Stitching</option>
                        <option>Ready Made</option>
                        <option>Fixing</option>
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
                            <input type="radio" id="other" name="radio" value="MenStitching"/>
                            <label htmlFor="radio1">Men's Stitching</label>
                            </Col>
                            <Col>
                            <input type="radio" id="other" name="radio" value="WomenStitching"/>
                            <label htmlFor="radio1">Women's Stitching</label>
                            </Col>
                          </Row>
                          <br/>
                          <Row>
                            <Col>
                            <input type="radio" id="other" name="radio" value="BoyStitching"/>
                            <label htmlFor="radio1">Boy's Stitching</label>
                            </Col>
                            <Col>
                            <input type="radio" id="other" name="radio" value="GirlStitching"/>
                            <label htmlFor="radio1">Girl's Stitching</label>
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
                  option={top10.map((option)=>option.title)}
                  freeSolo
                  renderTags={(value, getTagProps)=>
                    value.map((option,index)=>(
                      <Chip variant="outlined" label={option}{...getTagProps({index})}/>
                    ))
                  }
                  renderInput={(params)=>(<TextField {...params} variant="filled" placeholder='Favorties'/>)}
                  />
                  </Col>

                </Row>
              </Card.Body>
            </Card>
            <Row>
              <Col sm='7'>
                <Button variant='success' type='cancel'>Cancel</Button>
              </Col>
              <Col sm='4'>
                <Button variant='success' type='submit'>Save</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  );
};
const top10 = [
  {title: "Men's Stitching"},
  {title: "Women's Stitching"},
  {title: "Boy's Stitching"},
  {title: "Girl's Stitching"}

]

export default Creategigs;
