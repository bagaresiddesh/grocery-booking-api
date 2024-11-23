import { Grocery } from '../models/grocery';
import { handleError } from '../utils/errorHandler';

class AdminService {
  // Create a new grocery item
  async createGrocery(groceryData: { name: string; price: number; inventory: number }) {
    try {
      const grocery = await Grocery.create(groceryData);
      return grocery;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage);
    }
  }

  // Get all groceries
  async getAllGroceries() {
    try {
      const groceries = await Grocery.findAll();
      return groceries;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage);
    }
  }

  // Update an existing grocery item
  async updateGrocery(id: number, groceryData: { name?: string; price?: number; inventory?: number }) {
    try {
      const grocery = await Grocery.findByPk(id);
      if (!grocery) throw new Error('Grocery item not found');

      await grocery.update(groceryData);
      return grocery;
    } catch (error) {
      const errorMessage = handleError(error, undefined, 'Failed to process request');
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
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
      throw new Error(errorMessage);
    }
  }
}

export default new AdminService();
