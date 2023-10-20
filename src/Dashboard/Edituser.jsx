import React from "react";
import "../Dashboard/Edituser.css";
function Edituser({ user, onClose, onSave, handleEditClick }) {
  const handleSave = () => {
    onSave();
    onClose();
  };
  return (
    <div className="mm">
      <div className="edit-modal">
        <div className="edit-header">
          <h2>Edit User</h2>
          <button className="edit-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="edit-body">
          <form>
          
            <div className="form-group">
              <label for="profilePicture">profile picture:</label>
  <input type="file" id="profilePicture" name="profilePicture" className="pe"/>

              <label>Username:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" />
            </div>
            
            <div className="form-group">
              <label>Password:</label>
              <input type="Password" />
            </div>
          </form>
        </div>
        <div className="edit-footer">
          <button className="edit-button edit-save" onClick={handleSave}>
            Save
          </button>
          <button
            type="button"
            className="edit-button edit-cancel"
            onClick={handleEditClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edituser;
