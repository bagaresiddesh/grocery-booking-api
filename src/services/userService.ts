// src/services/userService.ts

import { Grocery } from '../models/grocery';
import { Order } from '../models/order';
import { OrderItem } from '../models/orderItem';
import { handleError } from '../utils/errorHandler';

interface BookGroceriesRequest {
  userId: number;
  groceryIds: number[];
}

// Get available groceries
const getAvailableGroceries = async () => {
  try {
    const groceries = await Grocery.findAll();  // Assume Grocery is a model interacting with DB
    return groceries;
  } catch (error: unknown) {
    throw new Error(handleError(error));  // Use handleError function for error message
  }
};

// Book groceries
const bookGroceries = async (userId: number, groceryIds: number[]) => {
  try {
    // Fetch groceries from the database
    const groceries = await Grocery.findAll({
      where: {
        id: groceryIds,
      },
    });

    if (groceries.length === 0) {
      throw new Error('No groceries found with the provided IDs');
    }

    // Deduct stock or any other logic you want for the groceries
    groceries.forEach(async (grocery: Grocery) => {
      if (grocery.inventory < 1) {
        throw new Error(`Not enough stock for ${grocery.name}`);
      }
      // Reduce stock, simulate booking
      grocery.inventory -= 1;
      await grocery.save();
    });

    // Create order
    const order = await Order.create({
      userId,
      totalPrice: groceries.reduce((total: number, grocery: Grocery) => total + grocery.price, 0),
    });

    // Create order items (many-to-many relationship between Order and Grocery)
    const orderItems = groceries.map((grocery: Grocery) => ({
      orderId: order.id,
      groceryId: grocery.id,
      quantity: 1,  // Assuming quantity 1 for simplicity, can be adjusted as needed
      price: grocery.price,
    }));

    await OrderItem.bulkCreate(orderItems);

    return order;
  } catch (error: unknown) {
    throw new Error(handleError(error));  // Use handleError function for error message
  }
};

export default {
  getAvailableGroceries,
  bookGroceries,
};
