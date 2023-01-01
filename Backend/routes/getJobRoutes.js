import express from "express";

import { BuyerRelatedJob } from "../controller/jobController.js";



const router = express.Router();


router.route('/:id').get(BuyerRelatedJob)


export default router;