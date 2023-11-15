import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './LoginPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginPage />
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