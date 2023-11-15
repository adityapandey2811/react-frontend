import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col full-page"
    >
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-white font-bold text-xl">OIA</a>
          <div className="flex space-x-4">
            <a href="/" className="text-white">Home</a>
            <a href="/about" className="text-white">Policies</a>
            <a href="/services" className="text-white">About</a>
          </div>
        </div>
      </nav>

      {/* Jumbotron */}
      <div className="flex-1 flex items-center justify-center shadow-md">
        <div className="bg-white rounded-lg p-8 shadow-2xl shadow-md jumbotron-color">
          <h1 className="text-4xl font-bold mb-4 text-color-custom drop-shadow-md">Welcome to InsuranceApp</h1>
          <p className="text-lg text-color-custom drop-shadow-md">Secure your future with our comprehensive insurance plans.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 InsuranceApp. All rights reserved.</p>
      </footer>
    </div>
  );
}