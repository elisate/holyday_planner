import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {FiEdit2} from 'react-icons/fi';
import {AiFillDelete} from 'react-icons/ai';
import './use.css';
function Use() {
const [SiteUser, SetSiteUser] = useState([]);
 const FecthData= async () => {
    try{
        const {data} = await axios.get(`https://holidayplanner.onrender.com/auth`);

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
    <div className='use1'>
      <table>
        <thead>
          <tr className="tab1">
            <th>FullNames</th>
            <th>email</th>
            <th>phoneNumber</th>
            <th>role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {SiteUser.map((item) => (
            <tr>
              <td>{item.FullNames}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.role}</td>
              <td>
                <FiEdit2  className='edituser1'/>
              </td>
              <td>
                <AiFillDelete className='deleteuser1' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Use