import React from "react";
import Hero from "./components/Hero";
import ServiceManagement from "./components/services/page";
import Login from "./components/Login";
import FinancialOverview from "./components/financialmanagement/FinancialOverview";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div className="bg-gray-100 px-1 sm:px-6 md:px-8 lg:px-4 "> {/* Add responsive padding for all screen sizes */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-10"> {/* Responsive padding */}
        <Hero />
        
        {/* Add responsive margin */}
        <div className="my-4 sm:my-6 md:my-8 lg:my-10">
          <Login />
        </div>
        
        <div className="my-4 sm:my-6 md:my-8 lg:my-10">
          <ServiceManagement />
        </div>

        <div className="my-4 sm:my-6 md:my-8 lg:my-10">
          <FinancialOverview />
        </div>
      </div>
    </div>
  );
}
