



import express from 'express';
import { shouldBeAdmin, shouldBeLoggeIn } from '../controllers/test.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router()
// SHOULD BELOGGED IN 
router.get('/should-be-logged-in',verifyToken, shouldBeLoggeIn
);


// SHOULD BE ADMIN
router.get('/should-be-admin', shouldBeAdmin);


export default router;











































