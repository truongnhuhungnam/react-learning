import React, { useState } from "react";

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(() => {
        const storageTodoList = JSON.parse(localStorage.getItem("todoList"));

        return storageTodoList;
    });

    const handleAddTodo = () => {
        setTodoList((prev) => {
            const newTodoList = [...prev, todo];

            // Save to local storage
            const jsonTodoList = JSON.stringify(newTodoList);
            localStorage.setItem("todoList", jsonTodoList);

            return newTodoList;
        });
        setTodo("");
    };

    return (
        <div>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                className="bg-black text-white border border-l-0 border-black hover:bg-transparent hover:text-black px-6 py-2"
                onClick={() => handleAddTodo()}
            >
                Add
            </button>

            <ul>
                {todoList.map((todoItem, index) => (
                    <li key={index}>{todoItem}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
