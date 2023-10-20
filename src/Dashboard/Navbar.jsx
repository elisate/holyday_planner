import React from "react";
 import  {LuSettings} from 'react-icons/lu';
 import {BsSun} from 'react-icons/bs';
import { MdOutlineDarkMode } from "react-icons/md";
import'./Navbar.css';
function Navbar() {
  return (
   
      <div className="holder_nav_dash">
        <div className="end_navbar_top1">
          <div>
            <h4> Hello,ELISA</h4>
          </div>
          <div>
            <LuSettings className="setting"/>
          </div>
        </div>
        <div className="end_navbar_top">
          <div>
            <BsSun className="sun" />
          </div>
          <div>Darkmode</div>
          <div>
            <MdOutlineDarkMode className="moon" />
          </div>
        </div>
      </div>
      
   
  );
}

export default Navbar;
