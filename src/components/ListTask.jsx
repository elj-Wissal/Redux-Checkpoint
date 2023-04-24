import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from '../actions/taskActions';
import Task from './Task';

const ListTask = () => {
const tasks = useSelector((state) => {
if (state.filter === 'done') {
return state.tasks.filter((task) => task.isDone);
} else if (state.filter === 'notDone') {
return state.tasks.filter((task) => !task.isDone);
} else {
return state.tasks;
}
});

const dispatch = useDispatch();

const handleFilterChange = (e) => {
dispatch(filterTasks(e.target.value));
};

return (
<div>
<select onChange={handleFilterChange}>
<option value="all">All Tasks</option>
<option value="done">Done Tasks</option>
<option value="notDone">Not Done Tasks</option>
</select>
{tasks.map((task) => (
<Task key={task.id} task={task} />
))}
</div>
);
};

export default ListTask;