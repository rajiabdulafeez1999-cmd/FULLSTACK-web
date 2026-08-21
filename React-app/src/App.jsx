import { Route, Routes } from "react-router-dom";
import "./App.css";
import Parent from "./Parents";
import Login from "./Login";
import Count from "./Count";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import UserProfile from "./UserProfile";
import Users from "./Users";
import SignUp from "./SignUp";
import { useState } from "react";
import UpdateUser from "../UpdateAndDelete";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <h1>welcome to React</h1>
      {/* 
    <Parent username= {username} />
    <Count />
    <Login/>
    {userLoggedIn ? <h1>Welcome</h1> : <h1>Log in </h1>} */}
      <Navbar />
      <Routes>
        <Route path="/count" element={<Count />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
