import { useState } from "react";
import { useTodoContext } from '../contexts/index';

const TodoItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();

    const toggle = () => {
        toggleComplete(todo.id)
    };

    const edit = () => {
        if(todo.completed){
            return;
        }

        if(isTodoEditable){
            updateTodo(todo.id, {
                ...todo,
                todo: todoMsg
            });
            setIsTodoEditable(false);
        }else{
            setIsTodoEditable(prev => !prev);
        }
    };

    return (
        <div className={
            `flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black
            ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
            className="cursor-pointer"
            type="checkbox"
            checked={todo.completed}
            onChange={toggle} />
            <input
            className={
                `border outline-none w-full bg-transparent rounded-lg
                ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}
                ${todo.completed ? "line-through" : ""}`
            }
            type="text"
            onChange={(e) => setTodoMsg(e.target.value)}
            value={todoMsg}
            readOnly={!isTodoEditable}
             />
             <button 
             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
             onClick={edit}
             disabled={todo.completed} >
                {isTodoEditable ? "📁" : "✏️"}
             </button>
             <button 
             onClick={() => deleteTodo(todo.id)}
             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                ❌
             </button>
        </div>
    );
}

export default TodoItem;