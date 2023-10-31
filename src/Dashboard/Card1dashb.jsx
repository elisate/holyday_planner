import React from 'react';
import "./Card1dashb.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { BiSolidPlaneAlt } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { PiAddressBook } from "react-icons/pi";
import { useContext } from 'react';
import { mycontext } from '../context/Contextprovider';
import Use from './Use';
import axios from 'axios';
function Card1dashb() {
const { listcard } = mycontext();
const [SiteUser, SetSiteUser] = useState([]);
const FecthData = async () => {
  try {
    const { data } = await axios.get(
      `https://holidayplanner.onrender.com/auth`
    );

    if (data) {
      console.log(data.data);
      SetSiteUser(data.data);
    }
  } catch (error) {
    console.log({ error });
  }
};

useEffect(() => {
  FecthData();
}, []);
  return (
    <>
      <div className="allcard1">
        <div className="carddash1">
          <div>
            <div className="toptext1">
              <p>Tours</p>
            </div>
            <div className="toptext">
              <ul className="kardlist">
                <li className="lmoney">{listcard.length}</li>
                <li> {listcard.length} Card Available</li>
              </ul>
            </div>
          </div>
          <div className="CD1">
            <BiSolidPlaneAlt className="CDa1" />
          </div>
        </div>
        <div className="carddash2">
          <div>
            <div className="toptext1">
              <p>Booked</p>
            </div>
            <div className="toptext">
              <ul className="kardlist">
                <li className="lmoney">75</li>
                <li>65% since last month</li>
              </ul>
            </div>
          </div>
          <div className="CD1">
            <PiAddressBook className="CDa1" />
          </div>
        </div>
        <div className="carddash3">
          <div className="toptext1">
            <p>Users</p>
          </div>
          <div className="toptext">
            <ul className="kardlist">
              <li className="lmoney">{SiteUser.length}</li>
              <li> {SiteUser.length} Users Available </li>
            </ul>
          </div>
          <div className="CD1">
            <ImUsers className="CDa1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1dashb