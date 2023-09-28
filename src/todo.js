import React, { useState } from "react";
import List from "./component/list";
import "./App.css";
import Notification from "./component/notification";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState("");
  const [isCheckedAgreement, setIsCheckedAgreement] = useState(false);
  const [notificationData, setNotificationData] = useState({
    display: false,
    text: "",
    color: "",
  });

  const setNotification = (text, color) => {
    setNotificationData({ display: true, text: text, color: color });
    setTimeout(() => {
      // after 3 second, remove notification
      setNotificationData({ display: false, text: "", color: "" });
    }, 3000);
  };

  const handleAdd = () => {
    if (input.length < 4) {
      setShowError("Value must be more than 4 characters");
    } else {
      setShowError("");
      setTasks([...tasks, input]); // task array luu nemj
      setInput(""); // input aa hooson bolgoj bga
      setNotification("Successfully added new task", "green");
    }
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleCheckedBox = (e) => {
    setIsCheckedAgreement(e.target.checked);
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((taskItem, i) => i !== index));
    setNotification("Successfully removed a task", "red");
  };

  // Save darhad, notification garj irne
  // Delete button darhad, notification garj irne

  //1: Create notification
  //2: True ==> display notification , False ==> disappear notification
  //3: Text dynamic
  //4: background-color dynamic
  // JSX

  console.log(isCheckedAgreement);

  return (
    <div>
      <div id="title">MY TO DO LIST {tasks.length}</div>
      <div className="taskContainer">
        <input
          className="enterBox"
          type="text"
          placeholder="Enter to do list"
          onChange={handleInput}
          value={input}
        />
        <input
          type="checkbox"
          checked={isCheckedAgreement}
          onChange={handleCheckedBox}
        />
        {isCheckedAgreement ? (
          <p style={{ color: "green" }}> checked the box</p>
        ) : (
          <p style={{ color: "red" }}>"Should check the box"</p>
        )}
        <div style={{ color: "red" }}>{showError}</div>
        <button id="saveButton" onClick={handleAdd}>
          Save
        </button>
      </div>
      {tasks.length >= 1 &&
        tasks.map((task, index) => {
          return (
            <List
              key={index}
              index={index}
              task={task}
              onClick={() => handleRemove(index)}
            />
          );
        })}
      {notificationData.display && (
        <Notification
          color={notificationData.color}
          text={notificationData.text}
        />
      )}
    </div>
  );
}

export default ToDo;
