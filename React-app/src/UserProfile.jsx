import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import axios from "axios";
import { useUser } from "../UserContext";
import UpdateUser from "../UpdateAndDelete";

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { theme, setTheme } = useContext(ThemeContext);
  // const [newUser, setNewUser] = useState("");
  const { user, logOut, getUser, loading } = useUser();

  const Delete = async () => {
    const res = await axios.delete(
      `https://fullstack-web-fl8k.onrender.com/users/${id}`,
    );
    navigate("/sign-up");
  };

  if (loading) return <div>loading.....</div>;

  return (
    <>
      <h1 className="user">User Name: {user.name}</h1>
      <h1 className="user">User Email: {user.email}</h1>
      <h1 className="user">User Role: {user.role}</h1>

      <Link to={`/update/${id}`}>
        <button className="update">Update User info</button>
      </Link>
      {/* <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        current theme = {theme}
      </button> */}
      <br />
      <button onClick={Delete}>Delete user</button>
    </>
  );
}

export default UserProfile;
