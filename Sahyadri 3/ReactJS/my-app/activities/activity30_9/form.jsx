"use client";

import { useState } from "react";
import "./form.css";

export default function Form() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="page">

      <div className="container">

        <div className="form-section">

          <h1>Sahyadri Music</h1>

          <p className="subtitle">
            Explore some good music
          </p>

          <div className="top-buttons">
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>

            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>

          <h5>Sign up with open account</h5>

          <div className="social-buttons">
            <button>in</button>
            <button>G</button>
            <button>f</button>
          </div>

          <div className="or">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          {!isLogin && (
            <>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
              />
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
          />

          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <button className="submit-btn">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </div>

        <div className="color-section">
          <h2>Music<br />for everyone.</h2>
        </div>

      </div>

    </div>
  );
}