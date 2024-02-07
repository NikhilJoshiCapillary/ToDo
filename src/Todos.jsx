
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTask, removeTask, editTask } from "./Actions/index";
import "./index.css";
import Navbar from "./Navbar";

function Todos() {
  const [task, setTask] = useState("");
  const [updatedTask, setUpdatedTask] = useState("");
  const [visible, setVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the task being edited
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.globalReducer);
  const arr = myState.array;

  const handleAddTask = () => {
    task !== ""
      ? dispatch(createTask(task)) && setTask("")
      : alert("Enter a valid task!"); // for adding a task
  };

  function removeTheTask(i) {
    dispatch(removeTask(i)); // for removing the task
  }


  const toggleVisibility = (index) => {
    setVisible(!visible);
    setEditIndex(index); // Set the index of the task being edited
  };

  function dualEdit({ updatedTask, index }) {
    updatedTask !== ""?dispatch(editTask({ updatedTask, index })):alert("Enter a valid updated task")
    setUpdatedTask("");
  }

  return (
    <>
      <div>
        <center>
          <input
            data-testid="input-bar"
            className="input-task"
            type="text"
            placeholder="Enter the task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            data-testid="add-btn"
            className="add-task-btn"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </center>
      </div>

      <div>
        {arr.map((work, index) => (
          <React.Fragment key={index}>
            <h4 className="visual">
              <div className="inner-visual">{work}</div>
            </h4>
            {visible === true &&
              editIndex === index && ( // Show input box only if editIndex matches the current task index
                <div>
                  <input
                    type="text"
                    value={updatedTask}
                    onChange={(e)=>setUpdatedTask(e.target.value)}
                    placeholder="Enter updated task"
                  />
                  <button onClick={() => dualEdit({ updatedTask, index })}>
                    Submit
                  </button>
                </div>
              )}
            <div className="remove-edit-btn">
              <button
                className="edit-task-btn"
                onClick={() => toggleVisibility(index)}
                data-testid="edit-btn"
              >
                Edit Task
              </button>
              <button
                data-testid="remove-btn"
                className="remove-btn"
                onClick={() => removeTheTask(index)}
              >
                Remove Task
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Todos;
