import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get('/groceries', userController.getAvailableGroceries);
router.post('/groceries/book', userController.bookGroceries);

export default router;
