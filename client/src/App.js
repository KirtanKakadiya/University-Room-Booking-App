import './App.css';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import ViewRoom from './pages/ViewRoom';
import RegisterPage from './pages/Register';
import {BrowserRouter, Route,Routes } from "react-router-dom";
import Layout from './Layout';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element = {<LoginPage />} />
        <Route path = "/register" element = {<RegisterPage />} />
      </Routes>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route path = "/home" element = {<HomePage />} />
          <Route path = "/viewroom" element = {<ViewRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
