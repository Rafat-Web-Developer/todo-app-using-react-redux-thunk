import { update } from "../actions";

const updateText = (todoId, currentText) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://learn-with-summit-server.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: currentText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(update(todo.id, todo.text));
  };
};

export default updateText;
