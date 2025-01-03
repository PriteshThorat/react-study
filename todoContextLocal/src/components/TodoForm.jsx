import { useState } from "react";
import { useTodoContext } from '../contexts/index'

const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodoContext();

    const add = (e) => {
        e.preventDefault();
        
        if(!todo){
            return;
        }

        addTodo({
            id: Date.now(),
            todo: todo,
            completed: false
        });

        setTodo("");
    };

    return (
        <form 
        className="flex"
        onSubmit={add} >
            <input
            type="text"
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            placeholder="Write Todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)} />
            <button
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            type="submit" >
                Add
            </button>
        </form>
    );
}

export default TodoForm;