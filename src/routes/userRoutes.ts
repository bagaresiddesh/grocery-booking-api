// src/routes/userRoutes.ts
import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// Define the routes
router.get('/groceries', userController.getAvailableGroceries);
router.post('/book', userController.bookGroceries);

export default router;
