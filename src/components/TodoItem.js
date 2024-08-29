import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete, onUpdate, darkMode }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [completed, setCompleted] = useState(todo.completed);

    const handleSave = () => {
        onUpdate(todo.id, { title, completed });
        setIsEditing(false);
    };

    return (
        <div className="w-full flex flex-col">
            {isEditing ? (
                <div className="flex flex-col space-y-2">
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="p-2 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    />
                    <label className="inline-flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            checked={completed} 
                            onChange={(e) => setCompleted(e.target.checked)} 
                            className="form-checkbox h-5 w-5"
                        />
                        <span className="text-black dark:text-white">Completed</span>
                    </label>
                    <div className="flex space-x-2">
                        <button 
                            onClick={handleSave} 
                            className={`px-4 py-2 rounded ${darkMode ? 'bg-blue-200 text-black' : 'bg-blue-500 text-white'}`}
                        >
                            Save
                        </button>
                        <button 
                            onClick={() => setIsEditing(false)} 
                            className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-400 text-black' : 'bg-gray-500 text-white'}`}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center">
                    <span 
                        className={`flex-1 ${todo.completed ? 'line-through' : ''} cursor-pointer text-black dark:text-white`}
                        onClick={() => onToggleComplete(todo.id, todo.completed)}
                    >
                        {todo.title}
                    </span>
                    <div className="flex space-x-2">
                        <button 
                            onClick={() => setIsEditing(true)} 
                            className={`px-4 py-2 rounded ${darkMode ? 'bg-yellow-200 text-black' : 'bg-yellow-500 text-white'}`}
                        >
                            Edit
                        </button>
                        <button 
                            onClick={() => onDelete(todo.id)} 
                            className={`px-4 py-2 rounded ${darkMode ? 'bg-red-200 text-black' : 'bg-red-500 text-white'}`}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoItem;