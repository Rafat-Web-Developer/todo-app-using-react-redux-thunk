import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const TodoApp = ({ status }) => {
  return (
    <div className='grid place-items-center font-sans mt-20'>
      <Navbar />

      <div className='w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white'>
        <h1 className='pb-4 text-center font-bold text-violet-600'>
          {status === "completed"
            ? "Completed Todo List"
            : "Incomplete Todo List"}
        </h1>
        {status === "incomplete" && <Header status={status} />}

        <hr className='mt-4' />

        <TodoList status={status} />

        <hr className='mt-4' />

        {status === "incomplete" && <Footer />}
      </div>
    </div>
  );
};

export default TodoApp;
