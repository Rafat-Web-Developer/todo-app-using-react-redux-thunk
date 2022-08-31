import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className='bg-blue-100 p-5'>
        <TodoApp status='completed' />
        <TodoApp status='incomplete' />
      </div>
    </Provider>
  );
}

export default App;
