"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email, "Password:", password);
    // Redirect to dashboard or another page on successful login
    router.push("/dashboard");
  };

  const handleSignUpRedirect = () => {
    router.push("/signup"); // Navigate to signup page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-purple-900">
      <div
        className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg w-80 backdrop-blur-md border border-white/30"
        style={{
          background: "rgba(255, 255, 255, 0.1)", // Transparent white effect
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
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
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-300">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleSignUpRedirect}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
