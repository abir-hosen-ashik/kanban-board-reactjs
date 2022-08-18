import * as types from './types';


export const setTaskForm = (payload) => ({
  type: types.SET_TASK_FORM,
  payload: payload,
  meta: {
    api: false,
    successMessage: 'Task seted on task form',
    errorMessage: "Task failed to seted on task form",
  },
});

export const addTask = (payload) => ({
  type: types.ADD_TASK,
  payload: {
    method: 'POST',
    path: 'task',
    data: payload
  },
  meta: {
    api: true,
    successMessage: 'Task add on task list',
    errorMessage: "Task failed to add on task list",
  },
});

export const removeTask = (id) => ({
  type: types.REMOVE_TASK,
  payload:{
    method: 'DELETE',
    path: `task/${id}`,
  },
  meta: {
    api: true,
    successMessage: 'Task removed from task list',
    errorMessage: "Task failed to remove from task list",
  },
});

export const setTaskList = () => ({
  type: types.SET_TASK_LIST,
  payload: {
    method: 'GET',
    path: 'task',
  },
  meta: {
    api: true,
    successMessage: 'Task seted on task list',
    errorMessage: "Task failed to set on task list",
  },
});

export const updateTask = (task) => ({
  type: types.UPDATE_TASK,
  payload: {
    method: 'POST',
    path: 'task',
    data: task
  },
  meta: {
    api: true,
    successMessage: 'Task updated on task list',
    errorMessage: "Task updated to set on task list",
  },
});


export const clearState = () => ({
  type: 'RESET_APP',
  meta: {
    api: false,
    successMessage: 'Successfully State Clear',
    errorMessage: "State not clear",
  },
});