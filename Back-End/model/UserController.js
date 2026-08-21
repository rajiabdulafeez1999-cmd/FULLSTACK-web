const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// async and try
const CreateUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    console.log("email:", email);
    if (!email) return res.status(404).json("Email is required");
    if (!password) return res.status(404).json("password is required");
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new User({ name, password: hashedpassword, email });
    await user.save();

    res.status(200).json("User Account Created");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server Error");
  }
};

const loginUser = async (req, res) => {
  console.log("ran");
  try {
    const { email, password } = req.body;

    console.log(password, email);
    if (!email) return res.status(404).json("Email is required");
    if (!password) return res.status(404).json("password is required");

    const user = await User.findOne({ email });
    console.log(email, password);

    //user.email
    //user.password
    //user_id
    //user.role
    const comparepassword = await bcrypt.compare(password, user.password);

    if (!comparepassword) return res.status(404).json("password incorrect");

    console.log("user:", user);
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_KEY,
      {
        expiresIn: "30m",
      },
    );
    res.status(200).json(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(400).json("User not found");

    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("server Error");
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) return res.status(404).json("User Not Found");

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password, email, role } = req.body;
    const user = await User.findByIdAndUpdate(id, {
      name,
      password,
      email,
      role,
    });

    res.status(200).json("user updated successfully");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);

    res.status(200).json("User Successfully Deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  CreateUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
