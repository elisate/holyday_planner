import React from 'react'
import './Sidebar.css';

import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="custom-background-color">
        

        <Outlet />
      </div>
    </div>
  );
}
