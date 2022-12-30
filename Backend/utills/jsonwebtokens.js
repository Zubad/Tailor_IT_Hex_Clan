import { Jwt } from "jsonwebtoken";


const generateToken = (id) =>{
    return Jwt.sign({id}, process.env.JWT_SEC, {
        expiresIn:"30d",
    })
}


export default generateToken;