import React, { useState } from 'react';
import { createTodo } from '../services/todoService';

const TodoForm = ({ onTodoAdded, darkMode }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        await createTodo({ title });
        setTitle('');
        onTodoAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Add a new todo"
                className={`flex-1 p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
            />
            <button 
                type="submit" 
                className={`px-4 py-2 rounded ${darkMode ? 'bg-green-200 text-black' : 'bg-green-500 text-white'}`}
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;