const express = require("express");
const {
  getUserById,
  CreateUser,
  getUsers,
  updateUser,
  deleteUser,
  loginUser,
} = require("../model/UserController");
const { verifyToken, verifyUser } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/create", CreateUser);
router.post("/login", loginUser);
router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
