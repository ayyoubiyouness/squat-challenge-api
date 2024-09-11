import Company from "../models/Company.js";
import User from "../models/User.js";

export const testController = (req, res) => {
  return res.status(200).json("hello from the test controller");
};

export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies", error });
  }
};
export const createCompany = async (req, res) => {
  try {
    const { name, code } = req.body;

    // Check if the company code already exists
    const existingCompany = await Company.findOne({ code });
    if (existingCompany) {
      return res
        .status(400)
        .json({ message: "Company with this code already exists" });
    }

    const company = new Company({ name, code });
    const savedCompany = await company.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ message: "Error creating company", error });
  }
};
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: "Error fetching company", error });
  }
};

export const getCompanyByUserId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const company = await Company.findById(user.companyId)
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: "Error fetching company", error });
  }
};

export const getCompanyByCode = async (req, res) => {
  const { code } = req.body;
  console.log(code);
  try {
    const company = await Company.findOne({ code });
    if (company) {
      res.json({ exists: true, companyId: company._id, totalSquats: company.totalSquats, name: company.name });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Error checking company code" });
  }
};
export const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: "Error updating company", error });
  }
};

export const addSquatToCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    const totalSquat = company.totalSquats
    const newTotalSquats = totalSquat + req.body.totalSquats
    company.totalSquats = newTotalSquats
    const savedCompany = await company.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    console.log(error)

  }

}

export const deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    es.status(500).json({ message: "Error deleting company", error });
  }
};
