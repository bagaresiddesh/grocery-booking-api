"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const adminRoutes = (0, express_1.Router)();
// Admin Routes
adminRoutes.post('/grocery', adminController_1.addGrocery); // Add a new grocery item
adminRoutes.get('/groceries', adminController_1.getGroceries); // View existing grocery items
adminRoutes.put('/grocery/:id', adminController_1.updateGrocery); // Update grocery details
adminRoutes.delete('/grocery/:id', adminController_1.deleteGrocery); // Remove a grocery item
adminRoutes.put('/grocery/:id/inventory', adminController_1.manageInventory); // Manage inventory levels
exports.default = adminRoutes;
