// src/services/adminService.ts

import { Grocery } from '../models/grocery'; // Import the Grocery model
import { Order } from '../models/order'; // If needed, import other models like Order, etc.
import { handleError } from '../utils/errorHandler';

class AdminService {
  // Create a new grocery item
  async createGrocery(groceryData: { name: string; price: number; inventory: number }) {
    try {
      const grocery = await Grocery.create(groceryData);
      return grocery;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage); // Use the returned message
    }
  }

  // Get all groceries
  async getAllGroceries() {
    try {
      const groceries = await Grocery.findAll();
      return groceries;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage); // Use the returned message
    }
  }

  // Update an existing grocery item
  async updateGrocery(id: number, groceryData: { name?: string; price?: number; inventory?: number }) {
    try {
      const grocery = await Grocery.findByPk(id);
      if (!grocery) throw new Error('Grocery item not found');
      
      // Update fields if provided
      await grocery.update(groceryData);
      return grocery;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage); // Use the returned message
    }
  }

  // Delete a grocery item
  async deleteGrocery(id: number) {
    try {
      const grocery = await Grocery.findByPk(id);
      if (!grocery) throw new Error('Grocery item not found');
      
      await grocery.destroy();
      return { message: 'Grocery item deleted successfully' };
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage); // Use the returned message
    }
  }

  // Manage inventory levels
  async manageInventory(id: number, quantity: number) {
    try {
      const grocery = await Grocery.findByPk(id);
      if (!grocery) throw new Error('Grocery item not found');
      
      grocery.inventory += quantity;
      await grocery.save();
      return grocery;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage); // Use the returned message
    }
  }
}

export default new AdminService();
