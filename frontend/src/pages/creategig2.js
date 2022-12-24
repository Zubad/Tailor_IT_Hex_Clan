import React from "react";
import UserHeader from "../components/userHeader";
import {Row, Col, Button, Form, Table, Container} from 'react-bootstrap';

function CreateGig2(){
    return(
        <div>
            <UserHeader/>
            <Container>
                <div className='gig2'>
                    <h3>Scope & Pricing</h3>
                    <div className='gig2line'></div>
                    <h5>Packages</h5>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Titles</th>
                                <th>BASIC</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan='3'></td>
                                <td>
                                    <From.Control as='textarea' row={3}/>
                                </td>
                                <td rowspan='3'></td>
                                <td>
                                    <Form.Control as='textarea' row={3}/>
                                </td>
                                <td rowspan='3'></td>
                                <td>
                                    <Form.Control as='textarea' row={3}/>
                                </td>
                            </tr>
                            <tr>
                                <td rowspan='3'></td>
                                <td>
                                    <From.Control as='textarea' row={3}/>
                                </td>
                                <td rowspan='3'></td>
                                <td>
                                    <Form.Control as='textarea' row={3}/>
                                </td>
                                <td rowspan='3'></td>
                                <td>
                                    <Form.Control as='textarea' row={3}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <From.Control as='select'>
                                        <option>a</option>
                                        <option>b</option>
                                        <option>c</option>
                                        <option>d</option>
                                    </From.Control>
                                </td>
                                <td>
                                    <From.Control as='select'>
                                        <option>a</option>
                                        <option>b</option>
                                        <option>c</option>
                                        <option>d</option>
                                    </From.Control>
                                </td>
                                <td>
                                    <From.Control as='select'>
                                        <option>a</option>
                                        <option>b</option>
                                        <option>c</option>
                                        <option>d</option>
                                    </From.Control>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}
export default CreateGig2;