// 10. Create User Model
import mongoose from "mongoose";
// npm i bcrypt
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    token: {
      type: String,
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// Hash password
UserSchema.pre("save", async function (next) {
  // prevent rehash
  if (!this.isModified("password")) {
    next();
  }
  // Hash
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Checking password
UserSchema.methods.checkPassword = async function (passwordForm) {
  return await bcrypt.compare(passwordForm, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;

// 11. go to index.js
