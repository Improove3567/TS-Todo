import { TodoItem } from "../Todo Item/TodoItem";
import { ITodo } from "../../types/data";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const { items, toggleTodo, removeTodo } = props
    return <div>
        {
            props.items.map((el) => <TodoItem
                key={el.id}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                {...el}
            />)
        }
    </div>
}

export { TodoList }