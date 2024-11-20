import express from 'express';
import { AdminController } from '../controllers/adminController';

const router = express.Router();

router.post('/grocery', AdminController.addGrocery);
router.get('/groceries', AdminController.getAllGroceries);
router.put('/grocery/:id', AdminController.updateGrocery);
router.delete('/grocery/:id', AdminController.deleteGrocery);
router.patch('/grocery/:id/inventory', AdminController.manageInventory);

export default router;
