import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { addTask, updateTask, removeTask, setTaskList } from './store/reducers/kanbanTaskResources';
import { new_task_7, task_list } from './asset/data';

function App() {

  const { tasks } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTaskList(task_list))
  }, [])

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      description: '',
      status: 'todo'
    },
    validateOnChange: false,
    validate: values => {
      let errors = {};
      if (!values.name) {
        errors = { ...errors, name: 'Enter task name please!' }
      }

      if (!values.description) {
        errors = { ...errors, description: 'Enter task description please!' }
      }
      console.log(errors)
      return errors;
    },
    onSubmit: (values) => formOnSubmit(values)
  });

  const formOnChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  }

  const formOnSubmit = (values) => {
    values.id = tasks.taskList.length + 1
    dispatch(addTask(values))
    console.log(values)
    formik.setValues(formik.initialValues)
  }

  const drag = (ev) => {
    console.log('dragging', ev.target.id)
    ev.dataTransfer.setData("text", ev.target.id);
  }

  const allowDrop = (ev) => {
    console.log('allowing drop', ev)
    ev.preventDefault();
  }

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    dispatch(updateTask(data, ev.currentTarget.id))
  }

  const cancelTask = () => {
    formik.setValues(formik.initialValues)
    formik.setErrors({})
  }

  const remove = (id, ev) => {
    ev.preventDefault();
    console.log(id, ev)
    dispatch(removeTask(id))
  }

  return (
    <div className="App">

      <div className="container">

        <div className="create-new-task-block" id="create-new-task-block">
          <h2>Add New Task</h2>

          <span className="form-row">
            <label className="form-row-label" for="task-name">Task</label>
            <input className="form-row-input" type="text" name="name" id="task-name" onChange={formOnChange} value={formik.values['name']} />
          </span>
          <span className="field-error">{formik.errors['name'] ? formik.errors['name'] : ''}</span>

          <span className="form-row">
            <label className="form-row-label" for="task-description">Description</label>
            <textarea className="form-row-input" name="description" id="task-description" cols="70" rows="10" onChange={formOnChange} value={formik.values['description']}></textarea>
          </span>
          <span className="field-error">{formik.errors['description'] ? formik.errors['description'] : ''}</span>

          <span className="form-row-buttons">
            <button id="save-button" onClick={formik.handleSubmit}>Save</button>
            <button id="cancel-button" onClick={cancelTask}>Cancel</button>
          </span>

        </div>
        <br /><br />

        <div className="kanban-board">

          <div className="kanban-block" id="todo" onDrop={drop} onDragOver={allowDrop}>
            <strong className='cart-header'>To Do</strong>
            {
              tasks.taskList &&
              tasks.taskList.map((task) =>
                task.status === 'todo' ?
                  <div key={task.id} className="task" id={task.id} draggable="true" onDragStart={drag}>
                    <span>{task.name}</span>
                    <button className='delete-task' onClick={(ev) => remove(task.id, ev)}>X</button>
                  </div> :
                  ''
              )
            }
          </div>

          <div className="kanban-block" id="inprogress" onDrop={drop} onDragOver={allowDrop}>
            <strong className='cart-header'>In Progress</strong>
            {
              tasks.taskList &&
              tasks.taskList.map((task) =>
                task.status === 'inprogress' ?
                  <div key={task.id} className="task" id={task.id} draggable="true" onDragStart={drag}>
                    <span>{task.name}</span>
                    <button className='delete-task' onClick={(ev) => remove(task.id, ev)}>X</button>
                  </div> :
                  ''
              )
            }
          </div>

          <div className="kanban-block" id="done" onDrop={drop} onDragOver={allowDrop}>
            <strong className='cart-header'>Done</strong>
            {
              tasks.taskList &&
              tasks.taskList.map((task) =>
                task.status === 'done' ?
                  <div key={task.id} className="task" id={task.id} draggable="true" onDragStart={drag}>
                    <span>{task.name}</span>
                    <button className='delete-task' onClick={(ev) => remove(task.id, ev)}>X</button>
                  </div> :
                  ''
              )
            }
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
