import Company from "../models/Company.js";
import User from "../models/User.js";

export const getUsersByCompany = async (req, res) => {
  try {
    const users = await User.find({ companyId: req.params.companyId });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, companyId } = req.body;

    // Check if the company exists
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const user = new User({ name, companyId });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
};
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
    
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
