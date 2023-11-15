import React from "react";
import LoginPage from "./components/LoginPage";
import AdminPage from "./components/AdminPage";
import RegistrationPage from './components/RegistrationPage';


function App() {
  return (
    <div className="App">
      <LoginPage />
      <AdminPage />
      <RegistrationPage />
    </div>
  );
}

export default App;
