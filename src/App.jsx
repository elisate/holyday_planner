import { useState } from "react";
import "./App.css";
import First from "./First.jsx";
import Home from "./Home.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Navtopages from "./pages/Navtopages";
import Footer from "./pages/Footer";
import Tour from "./pages/Tour.jsx";
import Register from "./pages/Register";
import Dashboard from "./Dashboard/Dashboard";
import Users from "./Dashboard/Users";
import Dashboardpage from "./Dashboard/Dashboardpage";
import TourArray from "./Dashboard/TourArray";
import Single from "./pages/Single";

import { Appcontext } from "./context/Contextprovider";


const Layout = () => {
  return (
    <>
       <header>
        <First />
      </header> 
      <Outlet />
      <footer>
        <Footer />
      </footer>
       
    </>
  );
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <Appcontext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/homepage" element={<Home />} />

            <Route path="/contact_page" element={<Contact />} />
            <Route path="/Tour_page/:Tid" element={<Single />} />
            <Route path="/Tour_page" element={<Tour />} />
            <Route path="loginbutton" element={<Login />} />
          </Route>

          <Route path="/Signup_page" element={<Register />} />
          <Route path="/login_page" element={<Login />} />
          <Route path="/Register_page" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<outlet />} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="users" element={<Users />} />
            <Route path="dashboard_page" element={<Dashboardpage />} />
            <Route path="tours" element={<TourArray />} />
            <Route path="log_to_out" element={<Login/>} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </Appcontext>
  );
}

export default App;
