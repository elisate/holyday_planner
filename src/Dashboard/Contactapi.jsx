import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import './contactapi.css';



function Contactapi() {
const [SiteUser, SetSiteUser] = useState([]);
const FecthData = async () => {
  try {
    const { data } = await axios.get(
      `https://holidayplanner.onrender.com/contact/`
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
    <div className='contactapi1'>
      <table>
        <thead>
          <tr>
            <th> Email</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {SiteUser.map((item) => (
            <tr>
              
              <td>{item.userEmail}</td>
              <td>{item.message}</td>
              <td>{item.reply}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contactapi