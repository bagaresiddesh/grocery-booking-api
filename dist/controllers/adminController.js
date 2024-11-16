"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.manageInventory = exports.deleteGrocery = exports.updateGrocery = exports.getGroceries = exports.addGrocery = void 0;
const db_1 = __importDefault(require("../config/db"));
// Add a new grocery item
const addGrocery = async (req, res) => {
    const { name, price, stock } = req.body;
    try {
        const [result] = await db_1.default.query('INSERT INTO groceries (name, price, stock) VALUES (?, ?, ?)', [name, price, stock]);
        res.status(201).json({ message: 'Grocery item added successfully', id: result.insertId });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to add grocery item', error });
    }
};
exports.addGrocery = addGrocery;
// View existing grocery items
const getGroceries = async (req, res) => {
    try {
        const [rows] = await db_1.default.query('SELECT * FROM groceries');
        res.status(200).json(rows);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch grocery items', error });
    }
};
exports.getGroceries = getGroceries;
// Update grocery details
const updateGrocery = async (req, res) => {
    const { id } = req.params;
    const { name, price, stock } = req.body;
    try {
        const [result] = await db_1.default.query('UPDATE groceries SET name = ?, price = ?, stock = ? WHERE id = ?', [name, price, stock, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Grocery item not found' });
            return;
        }
        res.status(200).json({ message: 'Grocery item updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update grocery item', error });
    }
};
exports.updateGrocery = updateGrocery;
// Remove a grocery item
const deleteGrocery = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db_1.default.query('DELETE FROM groceries WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Grocery item not found' });
            return;
        }
        res.status(200).json({ message: 'Grocery item removed successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to remove grocery item', error });
    }
};
exports.deleteGrocery = deleteGrocery;
// Manage inventory levels
const manageInventory = async (req, res) => {
    const { id } = req.params;
    const { stock } = req.body;
    try {
        const [result] = await db_1.default.query('UPDATE groceries SET stock = ? WHERE id = ?', [stock, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Grocery item not found' });
            return;
        }
        res.status(200).json({ message: 'Inventory updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update inventory', error });
    }
};
exports.manageInventory = manageInventory;
