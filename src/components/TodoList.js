import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList({ status }) {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  const completedTodos = todos.filter((todo) => todo.completed === true);
  const incompleteTodos = todos.filter((todo) => todo.completed === false);

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {status === "incomplete" && incompleteTodos.length === 0 && (
        <h1 className='text-center font-bold text-red-500'>
          There are no incomplete Todos Here
        </h1>
      )}
      {status === "completed" && completedTodos.length === 0 && (
        <h1 className='text-center font-bold text-red-500'>
          There are no completed Todos Here
        </h1>
      )}
      {status === "completed"
        ? completedTodos.map((todo) => <Todo todo={todo} key={todo.id} />)
        : incompleteTodos
            .filter(filterByStatus)
            .filter(filterByColors)
            .map((todo) => <Todo todo={todo} key={todo.id} />)}
    </div>
  );
}
