import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodo) => {
            return prevTodo.concat(newTodo);
        })
    };

    const deleteTodoHandler = (todoId: string) => {
        setTodos((prevTodo) => {
            return prevTodo.filter(todo => todo.id !== todoId)
        })
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos} onDeleteTodo={deleteTodoHandler}/>
        </div>
    );
}

export default App;
