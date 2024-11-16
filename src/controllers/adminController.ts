import { RequestHandler } from 'express';
import db from '../config/db';

// Add a new grocery item
export const addGrocery: RequestHandler = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const [result] = await db.query('INSERT INTO groceries (name, price, stock) VALUES (?, ?, ?)', [name, price, stock]);
    res.status(201).json({ message: 'Grocery item added successfully', id: (result as any).insertId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add grocery item', error });
  }
};

// View existing grocery items
export const getGroceries: RequestHandler = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM groceries');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch grocery items', error });
  }
};

// Update grocery details
export const updateGrocery: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE groceries SET name = ?, price = ?, stock = ? WHERE id = ?',
      [name, price, stock, id]
    );
    if ((result as any).affectedRows === 0) {
      res.status(404).json({ message: 'Grocery item not found' });
      return;
    }
    res.status(200).json({ message: 'Grocery item updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update grocery item', error });
  }
};

// Remove a grocery item
export const deleteGrocery: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query('DELETE FROM groceries WHERE id = ?', [id]);
    if ((result as any).affectedRows === 0) {
      res.status(404).json({ message: 'Grocery item not found' });
      return;
    }
    res.status(200).json({ message: 'Grocery item removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove grocery item', error });
  }
};

// Manage inventory levels
export const manageInventory: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;

  try {
    const [result] = await db.query(
      'UPDATE groceries SET stock = ? WHERE id = ?',
      [stock, id]
    );
    if ((result as any).affectedRows === 0) {
      res.status(404).json({ message: 'Grocery item not found' });
      return;
    }
    res.status(200).json({ message: 'Inventory updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update inventory', error });
  }
};
