import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstant';


export const Login = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config  = {
            headers:{
                'content-type': 'application/json'
            }
        }
        const {data} = await axios.post('/user/login', {email, password}, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userinfo', JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:error.response.data.message,
        })
    }
    
}

export const Logout = ()=>{
    localStorage.removeItem("userinfo");
    dispatch({
        type: USER_LOGOUT
    })
}

export const Register = (name, email, password, buyer) => async (dispatch) =>{
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config={
            headers:{
                "content-type": "application/json"
            }
        }
        const {data} = await axios.post('/user/register',{name, email, password, buyer}, config)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        localStorage.setItem("userinfo", JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:error.response.data.message
        })
    }
}