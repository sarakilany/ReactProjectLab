
import TodoList from "../../components/todo/TodoList";
import TodoForm from "../../components/todo/TodoForm";

function Todo() {
    // console.log('global state', useSelector())
    return (
        <div className="text-center container">
            <TodoForm />
            <TodoList />
        </div>)
}

export default Todo;
