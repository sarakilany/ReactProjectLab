import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoAction } from '../../redux/config';
import { addTodo, deleteTodo } from "../../redux/features/todoSlice";
const TodoList = () => {
    console.log(useSelector(state => state))
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const ondeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    const todosList =
        todos && todos.length > 0 ? (
            todos.map((todo, i) => {
                return (

                    <div className="d-flex border" key={i}>
                        <ul className="row col-11">
                            <li className="d-flex">
                                <div className="text  ">
                                    <p>Title : {todo.title}</p>
                                    <p>Content : {todo.content}</p>
                                </div>
                            </li>
                        </ul>
                        <button className="btn btn-primary" onClick={() => ondeleteTodo(i)}>delete</button>
                    </div>
                );
            }))
            : (
                <p className="h5 mx-5 text-muted">no items on the list ..</p>
            );

    return (
        <div className="text-left">
            <h5 className="mx-5 text-muted">Todos List</h5>
            {todosList}
        </div>
    );
};

export default TodoList;