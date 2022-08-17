
import './App.css';

import { useSelector, useDispatch } from 'react-redux'

function App() {

  const { tasks } = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(tasks)

  function drag(ev) {
    console.log('dragging', ev.target.id)
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function allowDrop(ev) {
    console.log('allowing drop', ev)
    ev.preventDefault();
  }

  function drop(ev) {
    console.log('dropping', ev)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
  }

  function createTask() {
    console.log('creating task')
    var x = document.getElementById("inprogress");
    var y = document.getElementById("done");
    var z = document.getElementById("create-new-task-block");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "flex";
    }
  }

  function saveTask() {
    // var saveButton = document.getElementById("save-button");
    // var editButton = document.getElementById("edit-button");
    // if (saveButton.style.display === "none") {
    //     saveButton.style.display = "block";
    //     editButton.style.display = "none";
    // } else{
    //     saveButton.style.display = "none";
    //     editButton.style.display = "block";
    // }

    var todo = document.getElementById("todo");
    var taskName = document.getElementById("task-name").value;
    todo.innerHTML += `
    <div className="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" onDragStart={drag}>
        <span>${taskName}</span>
    </div>
    `
  }

  function editTask() {
    var saveButton = document.getElementById("save-button");
    var editButton = document.getElementById("edit-button");
    if (saveButton.style.display === "none") {
      saveButton.style.display = "block";
      editButton.style.display = "none";
    } else {
      saveButton.style.display = "none";
      editButton.style.display = "block";
    }
  }




  return (
    <div className="App">

      <div className="container">
        <div className="kanban-heading">
          <strong className="kanban-heading-text">Kanban Board</strong>
        </div>
        <div className="kanban-board">

          <div className="kanban-block" id="todo" onDrop={drop} onDragOver={allowDrop}>
            <strong>To Do</strong>
            <div className="task-button-block">
              <button id="task-button" onClick={createTask}>Create new task</button>
            </div>
            <div className="task" id="task1" draggable="true" onDragStart={drag}>
              <span>Task 1</span>
            </div>
            <div className="task" id="task2" draggable="true" onDragStart={drag}>
              <span>Task 2</span>
            </div>
            <div className="task" id="task3" draggable="true" onDragStart={drag}>
              <span>Task 3</span>
            </div>
            <div className="task" id="task4" draggable="true" onDragStart={drag}>
              <span>Task 4</span>
            </div>
            <div className="task" id="task5" draggable="true" onDragStart={drag}>
              <span>Task 5</span>
            </div>
            <div className="task" id="task6" draggable="true" onDragStart={drag}>
              <span>Task 6</span>
            </div>
          </div>

          <div className="kanban-block" id="inprogress" onDrop={drop} onDragOver={allowDrop}>
            <strong>In Progress</strong>
          </div>

          <div className="kanban-block" id="done" onDrop={drop} onDragOver={allowDrop}>
            <strong>Done</strong>
          </div>


          <div className="create-new-task-block" id="create-new-task-block">
            <strong>New Task</strong>

            <span className="form-row">
              <label className="form-row-label" for="task-name">Task</label>
              <input className="form-row-input" type="text" name="task-name" id="task-name" />
            </span>

            <span className="form-row">
              <label className="form-row-label" for="task-name">Description</label>
              <textarea className="form-row-input" name="task-description" id="task-description" cols="70" rows="10"></textarea>
            </span>

            <span className="form-row">
              <label className="form-row-label" for="task-name">Status</label>
              <select className="form-row-input" name="task-status" id="task-status">
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </span>

            <span className="form-row-buttons">
              <button id="edit-button" onClick={editTask}>Edit</button>
              <button id="save-button" onClick={saveTask}>Save</button>
              <button id="cancel-button" onClick={createTask}>Cancel</button>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
