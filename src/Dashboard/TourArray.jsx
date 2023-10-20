import React, { useState } from "react";
import Tourtable from "./Tourtable";
import "./Tourarray.css";

const TourArray = () => {
  const [editingItem, setEditingItem] = useState(null);
  const [tourItems, setTourItems] = useState(Tourtable);

  const handleEditClick = (item) => {
    setEditingItem(item);
  };

  const handleSaveClick = (item) => {
    // Implement your logic to save the edited item here
    // You can use an API call or update the local state
    // For this example, we'll update the local state
    const updatedTourItems = tourItems.map((tour) =>
      tour.id === item.id ? item : tour
    );
    setTourItems(updatedTourItems);
    setEditingItem(null);
  };

  const handleDeleteClick = (item) => {
    // Implement your logic to delete the item here
    // You can use an API call or update the local state
    // For this example, we'll remove the item from the local state
    const updatedTourItems = tourItems.filter((tour) => tour.id !== item.id);
    setTourItems(updatedTourItems);
  };

  return (
    <div className="dash_array_tour">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Country</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {tourItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt="Country" className="tm" />
              </td>
              <td>
                {editingItem === item ? (
                  <input type="text" value={item.country} />
                ) : (
                  item.country
                )}
              </td>
              <td>
                {editingItem === item ? (
                  <input type="text" value={item.desc1} />
                ) : (
                  item.desc1
                )}
              </td>
            
              <td>
                {editingItem === item ? (
                  <input type="text" value={item.amount} />
                ) : (
                  item.amount
                )}
              </td>
             
              <td>
                {editingItem === item ? (
                  <>
                    <button onClick={() => handleSaveClick(item)} >Save</button><br/>
                  </>
                ) : (
                  <> 
                    <button onClick={() => handleEditClick(item)}>Edit</button>
                    <button onClick={() => handleDeleteClick(item)} className="bitte">
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourArray;
