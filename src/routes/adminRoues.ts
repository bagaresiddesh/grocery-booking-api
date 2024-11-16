import { Router } from 'express';
import { addGrocery, getGroceries, updateGrocery, deleteGrocery, manageInventory } from '../controllers/adminController';

const adminRoutes = Router();

// Admin Routes
adminRoutes.post('/grocery', addGrocery); // Add a new grocery item
adminRoutes.get('/groceries', getGroceries); // View existing grocery items
adminRoutes.put('/grocery/:id', updateGrocery); // Update grocery details
adminRoutes.delete('/grocery/:id', deleteGrocery); // Remove a grocery item
adminRoutes.put('/grocery/:id/inventory', manageInventory); // Manage inventory levels

export default adminRoutes;
