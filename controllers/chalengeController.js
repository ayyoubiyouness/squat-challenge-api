import Chalenge from "../models/Chalenge.js";

export const getChalenge = async (req, res) => {
  try {
    const challenges = await Chalenge.find();

    res.status(200).json(challenges);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve challenges", error: error.message });
  }
};

export const addChalenge = async (req, res) => {
  try {
    const { squatNumber, chalengeDuration, squatTime } = req.body;

    // Create a new challenge instance
    const newChallenge = new Chalenge({
      squatNumber,
      chalengeDuration,
      squatTime,
    });

    // Save the challenge to the database
    await newChallenge.save();

    res.status(201).json({
      message: "Challenge created successfully",
      challenge: newChallenge,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create challenge", error: error.message });
  }
};

export const getChalengeById = async (req, res) => {
  try {
    const chalenge = await Chalenge.findById(req.params.id);
    if (!chalenge) {
      return res.status(404).json({ message: "Chalenge not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching company", error });
  }
};

export const deleteChalenge = async (req, res) => {
  try {
    const deletedChalenge = await Chalenge.findByIdAndDelete(req.params.id);
    if (!deletedChalenge) {
      return res.status(404).json({ message: "Chalenge not found" });
    }
    res.status(200).json({ message: "Chalenge deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting chalenge", error });
  }
};
