import { useEffect, useState } from "react";
import { useUser } from "../UserContext";
import axios from "axios";
// Usage in Component
function Users() {
  const { users, getUsers, loading } = useUser();

  useEffect(() => {
    const allUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        await getUsers(token);
      } catch (error) {
        console.error(error.message);
      }
    };
    allUsers();
  }, []);

  if (loading) return <p>loading......</p>;

  return (
    <>
      <div>
        <table
          style={{ borderCollapse: "separate", borderSpacing: "15px 10px" }}
        >
          <thead style={{ textAlign: "left" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Users;
