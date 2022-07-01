import { useDispatch, useSelector } from "react-redux/es/exports"
import { addTodoAction, deleteTodoAction } from "../../redux";
import TodoList from "../../components/todo/TodoList";
import TodoForm from "../../components/todo/TodoForm";
import { addTodo, deleteTodo } from "../../redux/features/todoSlice";
function Todo() {
    // console.log('global state', useSelector())
    return (
        <div className="text-center container">
            <TodoForm />
            <TodoList />
        </div>)
}

export default Todo;
