import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RegistrationPage />
      </div>
    </Provider>
  );
// import logo from "./logo.svg";
// import "./App.css";
// import AdminPage from "./components/AdminPage";

// function App() {
//   return <div className="App">
//     <AdminPage />
//   </div>;
}

export default App;