import React, { useState } from "react";
import "./Create.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "./ProductReducer";

function Update() {
  const { id } = useParams();
  const Products = useSelector((state) => state.Products);
  const existProduct = Products.filter((d) => d.id == id);
  // if (existProduct.length === 0) {
  //     // Handle the case when the product doesn't exist
  //     return <div>Product not found</div>;
  // }
  const { name } = existProduct[0];
  const [newName, setName] = useState(name);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      editProduct({
        id: id,
        name: newName,
      })
    );
    navigation("/");
  };
  return (
    <>
      <div className="container">
        <div className="input-container">
          <form onSubmit={handleEdit}>
            <h3>Edit Tasks</h3>
            <input
              type="text"
              placeholder="Add a new task"
              className="task-input"
              value={newName}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="add-button" type="submit">
              Edit Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
