import React from "react";
import { useState } from "react";
import "../styles/LoginSignUp.scss";

const LoginSIgnUp: React.FC = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  return (
    <div className="loginForm">
      <h2>Login in</h2>
      <input
        type="Email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="Password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <p>Dont have an account?</p>
      <button>Login</button>
    </div>
  );
};

export default LoginSIgnUp;
