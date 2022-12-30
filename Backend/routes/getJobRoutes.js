import express from "express";

import { BuyerRelatedJob } from "../controller/jobController";



const router = express.Router();


router.route('/:id').get(BuyerRelatedJob)


export default router;