import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  const response = await fetch(
    "https://learn-with-summit-server.herokuapp.com/todos"
  );
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
