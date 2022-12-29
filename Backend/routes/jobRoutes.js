import express from "express";
import { addgig, getgigbyid, Getgigs } from "../controller/gigControler";
import { Addjob, getjobbyuser } from "../controller/jobController";



const router = express.Router();


router.route('/:id').get(getjobbyuser)
router.post('/insert', Addjob)

export default router;