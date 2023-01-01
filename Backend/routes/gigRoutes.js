import express from "express";
import { addgig, getgigbyid, Getgigs } from "../controller/gigControler.js";



const router = express.Router();

router.route('/').get(Getgigs)
router.route('/:id').get(getgigbyid)
router.post('/insert', addgig)

export default router;