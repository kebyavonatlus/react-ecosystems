import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    console.log(inputValue);

    return (
        <div className="new-todo-form">
            <input 
            className="new-todo-input" 
            type="text" 
            placeholder="Type your new Todo"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}/>
            <button className="new-todo-button">Create Todo</button>
        </div>
    )
};

export default NewTodoForm;