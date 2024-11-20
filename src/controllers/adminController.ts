import { Request, Response } from 'express';
import { AdminService } from '../services/adminService';
import { handleError } from '../utils/errorHandler';

export const AdminController = {
  async addGrocery(req: Request, res: Response) {
    try {
      const grocery = await AdminService.addGrocery(req.body);
      res.status(201).json(grocery);
    } catch (error) {
      handleError(res, error, 'Failed to add grocery');
    }
  },

  async getAllGroceries(req: Request, res: Response) {
    try {
      const groceries = await AdminService.getAllGroceries();
      res.status(200).json(groceries);
    } catch (error) {
      handleError(res, error, 'Failed to fetch groceries');
    }
  },

  async updateGrocery(req: Request, res: Response) {
    try {
      await AdminService.updateGrocery(Number(req.params.id), req.body);
      res.status(200).json({ message: 'Grocery updated successfully' });
    } catch (error) {
      handleError(res, error, 'Failed to update grocery');
    }
  },

  async deleteGrocery(req: Request, res: Response) {
    try {
      await AdminService.deleteGrocery(Number(req.params.id));
      res.status(200).json({ message: 'Grocery deleted successfully' });
    } catch (error) {
      handleError(res, error, 'Failed to delete grocery');
    }
  },

  async manageInventory(req: Request, res: Response) {
    try {
      await AdminService.manageInventory(Number(req.params.id), req.body.inventory);
      res.status(200).json({ message: 'Inventory updated successfully' });
    } catch (error) {
      handleError(res, error, 'Failed to manage inventory');
    }
  },
};
