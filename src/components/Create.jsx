import React, { useState } from "react";
import { addProduct } from "./ProductReducer";
import "./Create.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  customAlphabet } from "nanoid";

const nunuid = customAlphabet("123456789asdfghjkqwert", 7);
// TODO: nanoid generate unique code

function Create() {
  const [name, setName] = useState("");
  const Products = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const rand = nunuid();
    dispatch(addProduct({ id: rand, name }));
    navigation("/");
    console.log(event.target);
  };
  return (
    <div className="container">
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            className="task-input"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="add-button" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
