import axios from "axios";
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!username || !email || !password) {
  alert("Please fill all fields");
  return;
}
  try {
    const res = await axios.post(
      "https://stockora-backend.onrender.com/signup",
      {
        username,
        email,
        password,
      }
    );

    console.log(res.data);
    alert("Signup Successful!");
    navigate("/login");
  } catch (err) {
  console.log(err.response?.data);

  alert(
    err.response?.data?.message ||
    "Signup Failed"
  );
}
  };
  return (
 <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card shadow-lg border-0 p-4">

        <h1 className="fw-bold mb-4 text-center">
          Signup
        </h1>

        <input
           className="form-control mb-3"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
        className="form-control mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

        <input
        className="form-control mb-3"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

        <button
          className="btn btn-primary w-100"
          onClick={handleSignup}
        >
          Signup
        </button>

      </div>
    </div>
  </div>
</div>
);
}

export default Signup