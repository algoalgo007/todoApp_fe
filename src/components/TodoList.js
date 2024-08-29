import React, { useState, useEffect } from 'react';
import { getTodos, deleteTodo, updateTodo } from '../services/todoService';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = ({ darkMode }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    const handleToggleComplete = async (id, completed) => {
        const updatedTodo = await updateTodo(id, { completed: !completed });
        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    };

    const handleUpdate = async (id, updatedFields) => {
        const updatedTodo = await updateTodo(id, updatedFields);
        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">Todo List</h1>
            <TodoForm onTodoAdded={fetchTodos} darkMode={darkMode} />
            <ul className="space-y-4 mt-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
                        <TodoItem 
                            todo={todo} 
                            onDelete={handleDelete} 
                            onToggleComplete={handleToggleComplete} 
                            onUpdate={handleUpdate}
                            darkMode={darkMode}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;