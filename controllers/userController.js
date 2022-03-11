import User from "../models/User.js";
import generateId from "../helpers/generateId.js";
import generateJwt from "../helpers/generateJwt.js";

// 15. create this
// ! *** Register ***
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

// ! *** Autenticate ***
const autenticate = async (req, res) => {
  // user exits??
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Username doesn`t exist...");
    return res.status(400).json({ msg: error.message });
  }

  // user confirmed???
  if (!user.confirm) {
    const error = new Error("Your account has not been confirmed yet...");
    return res.status(403).json({ msg: error.message });
  }

  // user pasword confirm
  if (await user.checkPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateJwt(user._id),
    });
  } else {
    const error = new Error("Incorrect password...");
    return res.status(403).json({ msg: error.message });
  }
};

// ! *** Confirm user account ***
const confirm = async (req, res) => {
  const { token } = req.params;
  const userConfirm = await User.findOne({ token });
  if (!userConfirm) {
    const error = new Error("Username Token doesn`t exist...");
    return res.status(400).json({ msg: error.message });
  }
  try {
    userConfirm.confirm = true;
    userConfirm.token = "";
    userConfirm.save();
    res.json({ msg: "User is already confirmed..." });
  } catch (error) {
    console.log(error);
  }
};

// ! *** forgotPassword ***
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Username doesn`t exist...");
    return res.status(400).json({ msg: error.message });
  }
  try {
    user.token = generateId();
    await user.save();
    res.json({
      msg: "We have sent a link to your email to reset your password...",
    });
  } catch (error) {
    console.log(error);
  }
};

// ! *** checkToken ***
const checkToken = async (req, res) => {
  const { token } = req.params;
  const tokenExists = await User.findOne({ token });
  if (tokenExists) {
    res.json({ msg: "Valid username Token...!" });
  } else {
    const error = new Error("Username Token doesn`t exist...");
    return res.status(400).json({ msg: error.message });
  }
};

// ! *** newPassword ***
const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const user = await User.findOne({ token });
  if (user) {
    user.password = password;
    user.token = "";
    try {
      await user.save();
      res.json({ msg: "New password updated successfully" });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Username Token doesn`t exist...");
    return res.status(400).json({ msg: error.message });
  }
};

export {
  register,
  autenticate,
  confirm,
  forgotPassword,
  checkToken,
  newPassword,
};

// 16. go to userRoutes.js
