import React, { useState } from 'react';
import { removerTodo, updateTodo, toggleComplete, toggleEditable } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [isEditable, setIsEditable] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const toggle = (todo) => {
        setIsToggle(prev => !prev);

        const newIsToggle = !todo.completed;
        setIsToggle(newIsToggle);

        dispatch(toggleComplete({ id: todo.id, isToggle: newIsToggle }));
    }

    const edit = (todo) => {
        if(todo.completed){
            return;
        }

        setIsEditable(prev => !prev);

        const newIsEditable = !todo.isEditable;
        setIsEditable(newIsEditable);
    
        dispatch(toggleEditable({ id: todo.id, isEditable: newIsEditable }));
    };

    return (
        <div className='w-full'>
        {
            todos.map(todo => (
                <div 
                className={
                    `flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
                    ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
                key={todo.id} >
                    <input
                    className="cursor-pointer"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggle(todo)} />
                    <input
                    className={
                        `border outline-none w-full bg-transparent rounded-lg
                        ${todo.isEditable ? "border-black/10 px-2" : "border-transparent"}
                        ${todo.completed ? "line-through" : ""}`
                    }
                    type="text"
                    onChange={e => dispatch(updateTodo({id: todo.id, text: e.target.value}))}
                    value={todo.text}
                    readOnly={!todo.isEditable} />
                    <button 
                    disabled={todo.completed}
                    onClick={() => edit(todo)}
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" >
                        {todo.isEditable ? "📁" : "✏️"}
                    </button>
                    <button 
                    onClick={() => dispatch(removerTodo(todo.id))}
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                    ❌
                    </button>
                </div>
            ))
        }
        </div>
    );
};

export default Todos;