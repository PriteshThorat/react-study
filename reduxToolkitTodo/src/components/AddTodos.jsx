import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodos = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();

        dispatch(addTodo(input));
        
        setInput("");
    };

    return (
        <form
        onSubmit={submit}
        className="flex" >
            <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            placeholder="Write Todo..." />
            <button
            type="submit"
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
             >
                Add
            </button>
        </form>
    );
};

export default AddTodos;