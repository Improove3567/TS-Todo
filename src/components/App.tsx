import { useState, useEffect, useRef } from "react";
import { ITodo } from "../types/data";
import { TodoList } from "./Todo List/TodoList";
import "./App.css"

const App: React.FC = () => {
    const [value, setValue] = useState("");
    const [todoes, setTodoes] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    }
    const removeTodo = (id: number): void => {
        setTodoes(todoes.filter((todo) => todo.id !== id))
    }


    const toggleTodo = (id: number): void => {
        setTodoes(todoes.map((todo) => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const addTodo = () => {
        if (value) {
            setTodoes([...todoes, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue("");
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return <div>
        <div>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                className="main_input"
            />
            <button onClick={addTodo} className="main_btn">Add</button>
        </div>
        <TodoList items={todoes} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
}

export { App }