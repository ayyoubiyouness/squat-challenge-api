import express from "express";
import { createUser, deleteUser, getUserById, getUsersByCompany, updateUser } from "../controllers/userController.js";
const router = express.Router();


// Get all users associated with a specific company
router.get('/company/:companyId', getUsersByCompany);

// Create a new user
router.post('/', createUser);

// Get a specific user by ID
router.get('/:id', getUserById);

// Update a specific user by ID
router.put('/:id', updateUser);

// Delete a specific user by ID
router.delete('/:id', deleteUser);

export default router