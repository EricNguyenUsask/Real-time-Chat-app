import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function LogPage() {
  let navigate = useNavigate();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        let path = `/chat?name=${username}`;
        navigate(path);
      }
    });
  };

  return (
    <div className="App">
      <div
        className="registration"
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={register}
        >
          {" "}
          Register{" "}
        </button>
      </div>
      <div
        className="login"
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          style={{
            backgroundColor: "#008CBA",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={login}
        >
          {" "}
          Log in{" "}
        </button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default LogPage;
