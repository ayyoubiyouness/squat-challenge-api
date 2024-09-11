import express from "express";
import { addChalenge, deleteChalenge, getChalenge, getChalengeById } from "../controllers/chalengeController.js";
const router = express.Router();

// Get a list of all companies 
router.get('/', getChalenge);

// Create a new chalenge
router.post('/', addChalenge);

// Get a specific chalenge by ID
router.get('/:id', getChalengeById);

// Update a specific chalenge by ID
router.put('/:id', );

// Delete a specific chalenge by ID
router.delete('/:id', deleteChalenge);




export default router