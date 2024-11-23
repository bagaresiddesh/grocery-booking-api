import userService from '../services/userService';
import { Request, Response } from 'express';
import { handleError } from '../utils/errorHandler';

const getAvailableGroceries = async (req: Request, res: Response) => {
  try {
    const groceries = await userService.getAvailableGroceries();
    res.status(200).json(groceries);
  } catch (error) {
    handleError(error, res, 'Failed to process request');
  }
};

const bookGroceries = async (req: Request, res: Response) => {
  try {
    const { userId, groceryIds } = req.body;
    const order = await userService.bookGroceries(userId, groceryIds);
    res.status(201).json(order);
  } catch (error) {
    handleError(error, res, 'Failed to process request');
  }
};

export default {
  getAvailableGroceries,
  bookGroceries,
};
