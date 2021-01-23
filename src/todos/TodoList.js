import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css'

const TodiList = ({todos}) => (
    <div className="list-wrapper">
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodiList;