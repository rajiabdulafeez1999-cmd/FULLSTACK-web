import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fullstack-web-fl8k.onrender.com/users/create", {
        email,
        password,
      });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  if (error) return <h1>{error}</h1>;

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>Email</label>
        <input
          placeholder="Enter your email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>password</label>
        <input
          placeholder="Enter your password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignUp;
