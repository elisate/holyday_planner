import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {FiEdit2} from 'react-icons/fi';
import {AiFillDelete} from 'react-icons/ai';
import './use.css';
import Edituser from './Edituser';
import Notiflix from "notiflix";
function Use() {
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const handleEditClick = () => {
      setEditModalOpen((previsEditModal) => !previsEditModal);
    };
const [SiteUser, SetSiteUser] = useState([]);
 const FecthData= async () => {
    try{
        const {data} = await axios.get(`https://holidayplanner.onrender.com/auth`

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

       const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
       const [userToDelete, setUserToDelete] = useState(null);
       const handleConfirmDelete = async (id) => {
         try {
           Notiflix.Confirm.show(
             "Confirm delete user",
             "Do you want to delete?",
             "Yes",
             "No",
             async () => {
               const res = await axios.delete(
                 `https://holidayplanner.onrender.com/auth/deleteuser/${id}`,
                 {
                   headers: {
                     Authorization: `Bearer ${localStorage.getItem("token")}`,
                   },
                 }
               );
               window.location.reload();
             },
             () => {
               alert("If you say so...");
             },
             {}
           );
         } catch (error) {
           console.log(error);
         }
       };
       const handleDeleteClick = (user) => {
         setUserToDelete(user);
         handleConfirmDelete();
         // setShowDeleteConfirm(true);
       };
       const handleCancelDelete = () => {
         setShowDeleteConfirm(false);
       };

  return (
    <div className="use1">
      {isEditModalOpen && <Edituser handleEditClick={handleEditClick} />}
      <table className='usetable'>
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
            <tr className='tab2'>
              <td>{item.FullNames}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.role}</td>
              <td>
                <FiEdit2 className="edituser1" onClick={handleEditClick} />
              </td>
              <td>
                <AiFillDelete
                  className="deleteuser1"
                  onClick={() => handleConfirmDelete(item._id)}
                />
              </td>
            </tr>
          ))}

          {showDeleteConfirm && (
            <div className="popup">
              <p>Are you sure you want to delete {userToDelete._id}?</p>
              <button onClick={handleConfirmDelete}>OK</button>
              <button onClick={handleCancelDelete}>Cancel</button>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Use