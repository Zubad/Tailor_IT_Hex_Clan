import express from "express";
import { authUser, getUserProfile, registerUser } from "../controller/userController";




const router = express.Router();


router.post('/register', registerUser)
router.port('/login', authUser)
router.route('/profile').get(getUserProfile)


export default router;