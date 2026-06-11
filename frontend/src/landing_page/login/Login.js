import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://stockora-backend.onrender.com/login",
        {
          email,
          password,
        }
      );

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(  "username",res.data.username);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container py-5">
  <div className="row justify-content-center">

    <div className="col-lg-4 col-md-6 col-12">
        <div className="card shadow-lg border-0 p-4">

      <h1 className="fw-bold mb-4 text-center">Login</h1>

      <input
        className="form-control mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        className="form-control mb-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button
        className="btn btn-primary w-100"
        onClick={handleLogin}
      >
        Login
      </button>
     </div>
    </div>

  </div>
</div>
  );
}

export default Login;