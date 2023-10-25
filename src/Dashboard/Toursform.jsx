import React from 'react'
import './Toursform.css'
function Toursform({ user, onClose, onSave, handleEditClick }) {

      const handleSave = () => {
        onSave();
        onClose();
      };
  return (
    <div>
      <div className="tourform">
        <form>
          <div className="form-groupT">
            <label for="Image">Image:</label>
            <input type="file" id="Image" name="Image" />
          </div>

          <div className="form-groupT">
            <label>Country:</label>
            <input type="text" />
          </div>

          <div className="form-groupT">
            <label>Description:</label>
            <input type="text" />
          </div>

          <div className="form-groupT">
            <label>Group Size:</label>
            <input type="number" />
          </div>

          <div className="form-groupT">
            <label>Duration:</label>
            <input type="text" />
          </div>

          <div className="edit-footerT">
            <button type="button" className="edit-button edit-save">
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
        </form>
      </div>
    </div>
  );
}

export default Toursform