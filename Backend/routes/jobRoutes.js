import express from "express";
import { addgig, getgigbyid, Getgigs } from "../controller/gigControler";



const router = express.Router();


router.route('/:id').get(getjobbyuser)
router.post('/insert', AddJob)

export default router;