import React from "react"
import { Form,Button } from 'react-bootstrap';

const SignIn=()=>{
    
    return(
        <div className="logoForm" >
            <Form>
                <h3>Sign in to Tailor IT</h3>
                <br></br>
                <Form.Group controlId="Formemail">
                    <Form.Control type="email" placeholder="Email/Username"/>
                </Form.Group>
                <br></br>
                <Form.Group controlId="Formpassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <br></br>
                <Button  variant="success" size="md" block type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default SignIn