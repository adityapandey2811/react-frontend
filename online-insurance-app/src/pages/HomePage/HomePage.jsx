import React from "react";
import "./HomePage.css";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col full-page">
      <NavigationBar />

      {/* Jumbotron */}
      <div className="flex-1 flex items-center justify-center shadow-md">
        <div className="bg-white rounded-lg p-8 shadow-2xl shadow-md jumbotron-color">
          <h1 className="text-4xl font-bold mb-4 text-color-custom drop-shadow-md">
            Welcome to InsuranceApp
          </h1>
          <p className="text-lg text-color-custom drop-shadow-md">
            Secure your future with our comprehensive insurance plans.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
