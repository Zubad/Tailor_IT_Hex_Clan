import React from "react"
import { Form,Button } from 'react-bootstrap';


const JoinForm=()=>{
    
    return(
        <div className="logoForm">
            <Form>
                <h3>Sign in to Tailor IT</h3>
                <br></br>
                <Form.Group controlId="Formemail">
                    <Form.Control size="lg" type="email" placeholder="Email/Username"/>
                </Form.Group>
                <br></br>
                <Form.Group controlId="FormName">
                    <Form.Control type="name" placeholder="Name"/>
                </Form.Group>
                <br></br>
                <Form.Group controlId="Formpassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <br></br>
                <Form.Group controlId="FormName">
                    <div className="nbv">
                    <Form.Check custom type="checkbox" id="checkbox" />
                    <p>Join as Buyer</p>
                    </div>
                    <Button variant="success" size="md" block type="submit">Submit</Button>
                </Form.Group>
                
            </Form>
        </div>
    )
}
export default JoinForm