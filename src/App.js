import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
            <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div className="max-w-xl mx-auto p-4">
                    <button
                        onClick={toggleDarkMode}
                        className="mb-4 p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded"
                    >
                        Dark Mode
                    </button>
                    <TodoList darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
}

export default App;