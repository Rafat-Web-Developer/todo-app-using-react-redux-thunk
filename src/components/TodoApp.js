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
        {<Header status={status} />}

        <hr className='mt-4' />

        <TodoList status={status} />

        <hr className='mt-4' />

        <Footer />
      </div>
    </div>
  );
};

export default TodoApp;
