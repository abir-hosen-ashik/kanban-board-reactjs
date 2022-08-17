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
  payload: payload,
  meta: {
    api: false,
    successMessage: 'Task add on task list',
    errorMessage: "Task failed to add on task list",
  },
});

export const removeTask = (payload) => ({
  type: types.REMOVE_TASK,
  payload: payload,
  meta: {
    api: false,
    successMessage: 'Task removed from task list',
    errorMessage: "Task failed to remove from task list",
  },
});

export const setTaskList = (payload) => ({
  type: types.SET_TASK_LIST,
  payload: payload,
  meta: {
    api: false,
    successMessage: 'Task seted on task list',
    errorMessage: "Task failed to set on task list",
  },
});

export const updateTask = (id, state) => ({
  type: types.UPDATE_TASK,
  payload: {
    id: id,
    state: state
  },
  meta: {
    api: false,
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