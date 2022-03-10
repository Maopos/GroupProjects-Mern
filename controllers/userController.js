import User from "../models/User.js";
import generateId from "../helpers/generateId.js";

// 15. create this
const register = async (req, res) => {
  // avoid duplicate records
  const { email } = req.body;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    const error = new Error("User already exists....");
    return res.status(400).json({ msg: error.message });
  }

  // Saving new user
  try {
    const user = new User(req.body);
    user.token = generateId()
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

export { register };

// 16. go to userRoutes.js
