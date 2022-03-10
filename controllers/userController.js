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
    user.token = generateId();
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

const autenticate = async (req, res) => {
  // user exits??
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Username doesn`t exist...");
    return res.status(400).json({ msg: error.message });
  }

  // user confirmed??
  if (!user.confirm) {
    const error = new Error("Your account has not been confirmed yet...");
    return res.status(403).json({ msg: error.message });
  }

  // user pasword confirm
};

export { register, autenticate };

// 16. go to userRoutes.js
