import axios from 'axios';

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config  = {
            headers:{
                'content-type': 'application/json'
            }
        }
        const {data} = await axios.post('https://63a6b143f8f3f6d4ab1040d5.mockapi.io/users', {email, password}, config)
    }
    
}