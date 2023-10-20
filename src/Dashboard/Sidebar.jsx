import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { FaCampground } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import {ImUsers} from "react-icons/im";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="dashhold">
      <div className="dushboard_header1">
        <div className="image_sidebar">
          <div className="image_sidebar">
            <img src="../elisa2.jpeg" className="photodash" />
          </div>
          <div className="nameelisa">
            <h4>ELISA </h4>
          </div>
        </div>
        <div className="sidebar_subholder">
          <ul>
            <li className="list_dash">
              <BiSolidDashboard />
              <a href="dashboard_page" className="list_dash">
                Dashboard
              </a>
            </li>
            <li>
              <ImUsers /> <a href="users">Users</a>
            </li>
            <li>
              <FaLocationDot /> <a href="/">Place </a>
            </li>
            <li>
              <BiSolidPlaneAlt /> <a href="tour_table">Tour</a>
            </li>
            <li>
              <CiCalendarDate /> <a href="/">Upcoming</a>
            </li>
            <li>
              <FaCampground />
              <a href="/">Camps</a>
            </li>

            <li>
              <FaRegCalendarAlt />
              <a href="calender">Calender</a>
            </li>
            <li>
              <BsChatDots /> <a href="/">Chart</a>
            </li>
            <li>Popular places</li>
            <li className="dom_dash1">
              <BsFillCircleFill /> <a href="/">Olso/Norway</a>
            </li>
            <li className="dom_dash">
              <BsFillCircleFill />
              <a href="/">Muai/Huwaii</a>
            </li>

            <li className="list_dash">
              <MdExpandMore />
              <a href="/" className="list_dash">
                Show More
              </a>
            </li>

            <li className="logout">
              <AiOutlineLogout /> <a href="log_to_out">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
