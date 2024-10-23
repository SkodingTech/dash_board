"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [signupMethod, setSignupMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (signupMethod === "email") {
      console.log("Email:", email, "Password:", password);
    } else {
      console.log("Mobile Number:", mobileNumber, "Password:", password);
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-purple-900">
      <div
        className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg w-80 backdrop-blur-md border border-white/30"
        style={{
          background: "rgba(255, 255, 255, 0.1)", // Transparent white effect
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Option to choose between email or mobile */}
          <div className="mb-4">
            <label className="text-gray-300 font-bold mb-2">Sign up with:</label>
            <div className="flex space-x-4">
              <label className="text-gray-300">
                <input
                  type="radio"
                  value="email"
                  checked={signupMethod === "email"}
                  onChange={() => setSignupMethod("email")}
                />
                Email
              </label>
              <label className="text-gray-300">
                <input
                  type="radio"
                  value="mobile"
                  checked={signupMethod === "mobile"}
                  onChange={() => setSignupMethod("mobile")}
                />
                Mobile Number
              </label>
            </div>
          </div>

          {/* Conditionally render the email or mobile number input */}
          {signupMethod === "email" ? (
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-600"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          ) : (
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-600"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-600"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white border-gray-600"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <button
              onClick={handleLoginRedirect}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
