import express from "express";
import { createSquatRecord, deleteSquatRecord, getSquatRecordById, getSquatRecordsByCompany, getSquatRecordsByUser } from "../controllers/squatRecordController.js";
const router = express.Router();

// Get all squat records for a specific user
router.get('/user/:userId', getSquatRecordsByUser);

// Get all squat records for a specific company
router.get('/company/:companyId', getSquatRecordsByCompany);

// Create a new squat record
router.post('/', createSquatRecord);

// Get a specific squat record by ID
router.get('/:id', getSquatRecordById);

// Delete a specific squat record by ID
router.delete('/:id', deleteSquatRecord);

export default router