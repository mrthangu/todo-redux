import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { deleteProduct } from "./ProductReducer";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products);
  const handleDelete = (id) => {
    dispatch(deleteProduct({ id: id }));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todo-container">
        <ul className="task-list">
          {Products.map((product, index) => (
            <li key={index} className="task-item">
              {/* {product.id} */}
              {product.name}

              <Link to={`/edit/${product.id}`} className="task-button edit">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="task-button delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="add-task">
          {/* <input
            type="text"
            placeholder="Add a new task"
        
          /> */}
          <button
            onClick={() => {
              navigation("/create");
            }}
            className="task-button"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
