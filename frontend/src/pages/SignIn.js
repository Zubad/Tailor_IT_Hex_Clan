import React, {useState, useEffect} from "react";
import { Form,Button } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { Login } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const SignIn=()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userLogin = useSelector(state=>state.userLogin);
    const {loading, error, userinfo} = userLogin;
    let history = useNavigate();

    useEffect(()=>{
        if(userinfo){
            if(userinfo.isBuyer===true){
                history.push('/buyer')
            } else {
                history.push('/user')
            }
        }
    }, [history, userinfo])


    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(Login(email, password))
    }
    
    return(
        <div className="logoForm" >
            <Form onSubmit={submitHandler}>
                <h3>Sign in to Tailor IT</h3>
                <br></br>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email/Username"
                    value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"
                    value={password} onChange={(e)=> setPassword(e.target.value)} />
                </Form.Group>

                {loading && <h5>.....Loading</h5>}
                {error && <h5>{error}</h5>}
                <Button  variant="success" size="md" block type="submit">Submit</Button>
            </Form>
        </div>
    )
}
export default SignIn