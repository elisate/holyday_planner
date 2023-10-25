import React, { useState } from "react";
import "./Tourarray.css";
import { useContext } from "react";
import { Appcontext } from "../context/Contextprovider";
import { mycontext } from "../context/Contextprovider";
import Toursform from "./Toursform";
import AddFormtours from "./AddFormtours";

function TourArray () {
  const { listcard } = mycontext();

const [isEditModalOpen, setEditModalOpen] = useState(false);
const handleEditClick = () => {
  setEditModalOpen((previsEditModal) => !previsEditModal);
};
const [isCreate, setCreate] = useState(false);
const handleCreateClick = () => {
  setCreate((previsEditModal) => !previsEditModal);
};


  return (
    <div className="dash_array_tour">
      {isCreate && <AddFormtours handleCreateClick={handleCreateClick} />}
      {isEditModalOpen && <Toursform handleEditClick={handleEditClick} />}

      <div className="add">
        <button type="option" onClick={handleCreateClick}>
          Add Tours
        </button>
      </div>
      <table>
        <thead>
          <tr className="tab1">
            <th>gallery</th>
            <th>Image</th>
            <th>Country</th>
            <th>Description</th>
            <th>Group size</th>
            <th>Duration</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {listcard.map((item) => (
            <tr>
              <td className="gl">{item.Gallery}</td>
              <td>
                <img
                  src={item.backdropImage}
                  alt={`Image for ${item.Galley}`}
                  className="img_tours"
                />
              </td>

              <td>{item.Title}</td>
              <td>{item.destination}</td>
              <td>{item.GroupSize}</td>
              <td>{item.fromMonth}</td>
              <td>
                <button type="option" onClick={handleEditClick}>
                  Edit
                </button>
              </td>
              <td>
                <button type="cancel" className="A">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourArray;
