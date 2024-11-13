"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Set email error if "@" is missing
    setEmailError(!value.includes("@"));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false); // Reset error message on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email or password is invalid
    if (emailError || !email || !password) return;

    // Simulate password validation (replace this with real validation)
    const correctPassword = "correctPassword";
    if (password !== correctPassword) {
      setPasswordError(true);
      return;
    }

    console.log("Email:", email, "Password:", password);
    router.push("/dashboard"); // Redirect on successful login
  };

  const handleSignUpRedirect = () => {
    router.push("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent lg:bg-transparent p-4 lg:p-0 ipad:p-6 ipad:pt-10">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[90%] md:w-[95%] lg:w-[40%] xl:w-[30%] mx-auto my-10 lg:my-20 ipad:my-6 ipad:w-[60%] ipad-landscape:w-[50%] border border-white/30"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-start text-black">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-500 border-gray-600"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">Invalid email. Please include an "@" symbol.</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-500 border-gray-600"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">Incorrect password. Please try again.</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={emailError || !email || !password}
              className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                emailError || !email || !password ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
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
