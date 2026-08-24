import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const updateById = async (e) => {
    e.preventDefault();

    try {
      if (!role) return alert("fill your credentais");
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://fullstack-web-fl8k.onrender.com/users/${id}`,
        {
          role,
        },
      );
      navigate(`/user/${id}`);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
    if (error) return <h2>{error}</h2>;
  };

  return (
    <>
      <form onSubmit={updateById}>
        {/* <input
          type="text"
          placeholder="update your name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
        {/* <input
          type="password"
          placeholder="update your password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="update your role to admin or user "
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default UpdateUser;
