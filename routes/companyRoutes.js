import express from "express";
import { addSquatToCompany, createCompany, deleteCompany, getAllCompanies, getCompanyByCode, getCompanyById, getCompanyByUserId, testController, updateCompany } from "../controllers/companyController.js";
const router = express.Router();

// Get a list of all companies 
router.get('/', getAllCompanies);

// Create a new company
router.post('/', createCompany);

// Get a specific company by ID
router.get('/:id', getCompanyById);

// Update a specific company by ID
router.put('/:id', updateCompany);


// Add squats to the company
router.put('/addSquat/:id', addSquatToCompany)

// Get company by code 
router.post("/check-code", getCompanyByCode)

// Delete a specific company by ID
router.delete('/:id', deleteCompany);

// get a company By user Id
router.get("/user/:id", getCompanyByUserId)


export default router