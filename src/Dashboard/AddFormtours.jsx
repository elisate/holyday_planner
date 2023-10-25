import React from "react";
import "./Toursform.CSS";
import TourArray from "./TourArray";
import { useForm } from "react-hook-form";
import axios from "axios";


function AddFormtours() {
  const onSubmit = async (tour) => {
    const formData = new FormData();
    formData.append("destination", tour.destination);
    formData.append("Title", tour.title);
    formData.append("Description", tour.description);
    formData.append("Duration", tour.duration);
    formData.append("GroupSize", tour.groupSize);
    formData.append("Price", tour.price);
    formData.append("Discount", tour.discount);
    formData.append("backdropImage", tour.image[0]);
    formData.append("Gallery", tour.gallery[0]);

    try {
      const res = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data) {
        console.log("Tour created", res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  return (
    <div>
      <div className="tourform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-groupT">
            <label for="garrely">gallery:</label>
            <input
              type="file"
              name="gallery"
              accept="image/*"
              {...register("gallery", { required: true })}
            />
          </div>
          <div className="form-groupT">
            <label for="Image">Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              {...register("image", { required: true })}
            />
          </div>

          <div className="form-groupT">
            <label>Country:</label>
            <input
              type="text"
              name="title"
              {...register("title", { required: true })}
            />
          </div>

          <div className="form-groupT">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              {...register("description", { required: true })}
            />
          </div>

          <div className="form-groupT">
            <label>Group Size:</label>
            <input
              type="number"
              name="groupsize"
              {...register("groupsize", { required: true })}
            />
          </div>

          <div className="form-groupT">
            <label>Duration:</label>
            <input
              type="text"
              name="duration"
              {...register("duration", { required: true })}
            />
          </div>

          <div className="edit-footerT">
            <button type="submit" className="edit-button edit-save">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFormtours;
