import React from 'react';
import {
  BiHome, BiBookAlt, BiMessage, BiSolidReport,
  BiStats, BiTask, BiHelpCircle, BiLogOut} from 'react-icons/bi';
import "../../styles/sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login"); 
  };

  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>EduFlex</h2>
      </div>

      <div className="menu--list">
        <a href="#" className="item">
               <BiHome className="icon" />
            Dashboard
        </a>
        <a href="#" className="item">
              <BiTask className="icon" />
            Assignment
        </a>
        <a href="#" className="item">
             <BiSolidReport className="icon" /> 
            Report
        </a>
        <a href="#" className="item">
               <BiStats className="icon" />
             Stats
             </a>
        <a href="#" className="item">
            <BiMessage className="icon" />
         Message
        </a>
        <a href="#" className="item">
            <BiHelpCircle className="icon" />
             Help
        </a>

        <div onClick={handleLogout} className="item" role="button" tabIndex={0}>
          <BiLogOut className="icon" />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
