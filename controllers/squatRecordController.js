import Company from "../models/Company.js";
import User from "../models/User.js";
import SquatRecord from "../models/Squat.js";

export const getSquatRecordsByUser = (req, res) => {
  return res.status(200).json("hello from the test controller");
};

export const getSquatRecordsByCompany = async (req, res) => {
  try {
    const squatRecords = await SquatRecord.find({
      companyId: req.params.companyId,
    });
    res.status(200).json(squatRecords);
  } catch (error) {
    res.status(500).json({ message: "Error fetching squat records", error });
  }
};
export const createSquatRecord = async (req, res) => {
  try {
    const { userId, companyId, squatCount } = req.body;

    // Check if the user and company exist
    const user = await User.findById(userId);
    const company = await Company.findById(companyId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Create a new squat record
    const squatRecord = new SquatRecord({ userId, companyId, squatCount });
    const savedSquatRecord = await squatRecord.save();

    // Update the user's total squats and history
    user.totalSquats += squatCount;
    user.squatHistory.push({ date: squatRecord.date, count: squatCount });
    await user.save();

    // Update the company's total squats
    company.totalSquats += squatCount;
    await company.save();

    res.status(201).json(savedSquatRecord);
  } catch (error) {
    res.status(500).json({ message: "Error creating squat record", error });
  }
};
export const getSquatRecordById = async (req, res) => {
  try {
    const squatRecords = await SquatRecord.find({ userId: req.params.userId });
    res.status(200).json(squatRecords);
  } catch (error) {
    res.status(500).json({ message: "Error fetching squat records", error });
  }
};
export const deleteSquatRecord = async (req, res) => {
  try {
    const squatRecord = await SquatRecord.findById(req.params.id);
    if (!squatRecord) {
      return res.status(404).json({ message: 'Squat record not found' });
    }

    // Adjust the user's and company's total squats before deleting
    const user = await User.findById(squatRecord.userId);
    const company = await Company.findById(squatRecord.companyId);

    if (user && company) {
      user.totalSquats -= squatRecord.squatCount;
      company.totalSquats -= squatRecord.squatCount;

      await user.save();
      await company.save();
    }

    await squatRecord.deleteOne();
    res.status(200).json({ message: 'Squat record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: "Error deleting squat record", error });
  }
};
