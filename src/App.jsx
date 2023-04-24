import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './actions/taskReducer';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const store = createStore(taskReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className='box'>
        <h1>To-Do List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
