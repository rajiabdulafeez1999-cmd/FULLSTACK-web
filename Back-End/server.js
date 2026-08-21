require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");
const cors = require("cors");

const PORT = 2020;
const app = express();

// bulit-in middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGOD_URL)
  .then((result) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error(err.message);
  });

//CREATE
// const userCreate = async () => {
//   const user = new User({ name: "Afeez" });
//   await user.save();
// };
// userCreate();

// //READ
// const getUser = async () => {
//   const users = await User.find();
//   console.log(users);
// };
// getUser();

// //UPDATE
// const updateUser = async () => {
//   const user = await User.findByIdAndUpdate("6a54ea4c168b7c5d17ba4100", {
//     age: 20,
//     course: "FullStack",
//   });
// };
// updateUser();

// DELETE
// const deleteUser = async () => {
//   await User.findByIdAndDelete("6a54ea4c168b7c5d17ba4100");
// };
// deleteUser();

// const CreateUser = new User({ name: "Afeez" });

// custom middleware for logging
// app.use((req, res, next) => {
//   console.log(`${req.method} request made to ${req.url}`);
//   next(); // move to next handler
// });

// app.get("/", (req, res) => {
//   res.send("Hello,Welcome to Backend");
// });

// app.get("/afeez", (req, res) => {
//   res.send("this is afeez's page");
// });

// app.get("/azeez", (req, res) => {
//   res.send("This is azeez's pages");
// });

// app.get("/afeez", (req, res) => {
//   res.send("Welcome too your new backend page");
// });

const UserRoutes = require("./routes/UserRoutes");
app.use("/users", UserRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
// // //nodemon
//mongodb://rajiabdulafeez1999_db_user:AYI2kbHE1aRg9TeB@ac-tydyyog-shard-00-00.cl92xcu.mongodb.net:27017,ac-tydyyog-shard-00-01.cl92xcu.mongodb.net:27017,ac-tydyyog-shard-00-02.cl92xcu.mongodb.net:27017/?ssl=true&replicaSet=atlas-116mug-shard-0&authSource=admin&appName=Cluster0
