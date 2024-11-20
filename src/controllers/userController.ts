import { Request, Response } from 'express';
import UserService from '../services/userService';
import { handleError } from '../utils/errorHandler';

export const UserController = {
  /**
   * Fetch all available groceries
   */
  async getAvailableGroceries(req: Request, res: Response) {
    try {
      const groceries = await UserService.getAvailableGroceries();
      return res.status(200).json({
        success: true,
        data: groceries,
      });
    } catch (error) {
      return handleError(error);
    }
  },

  /**
   * Book groceries
   */
  async bookGroceries(req: Request, res: Response) {
    try {
      const userId = Number(req.body.userId);
      const items = req.body.items; // Expecting an array of { groceryId, quantity }

      if (!userId || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Invalid request. Provide a valid userId and grocery items.',
        });
      }

      const order = await UserService.bookGroceries(userId, items);
      return res.status(201).json({
        success: true,
        data: order,
        message: 'Groceries booked successfully.',
      });
    } catch (error) {
      return handleError(error);
    }
  },
};
