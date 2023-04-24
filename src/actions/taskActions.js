import { ADD_TASK, TOGGLE_TASK, FILTER_TASKS, EDIT_TASK } from './types';

export const addTask = (description) => {
  return {
    type: ADD_TASK,
    payload: {
      id: Math.floor(Math.random() * 1000),
      description,
      isDone: false,
    },
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: id,
  };
};

export const filterTasks = (filterType) => {
  return {
    type: FILTER_TASKS,
    payload: filterType,
  };
};

export const editTask = (id, description) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      description,
    },
  };
};