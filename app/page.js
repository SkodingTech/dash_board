import React from "react";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Login from "./components/Login";


export default function Home() {
  return (
    <div className="bg-gray-100 px-3"> {/* Add background and padding */}
      <div className="p-6">
        <Hero />
        <SignUp />
        <Login />
        
      </div>
    </div>
  );
}
