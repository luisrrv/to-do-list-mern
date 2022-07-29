import React from "react";
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const TodoList = ({ todoInfos, editHandler, deleteHandler }) => {
  const { _id, title, description } = todoInfos;

  return (
    <li key={_id}>
      <div className="title-description">
        <h2 className="title">{title}</h2>
        {/* <h1></h1> */}
        <p className="description">{description}</p>
      </div>
      {/* <h1></h1> */}
      <div className="todo-btn-container">
        <button className="todo-btn edit-btn" name={_id} onClick={editHandler}>
          <BiEdit size={20} />
        </button>
        <button className="todo-btn edit-btn" name={_id} onClick={deleteHandler}>
          <AiFillDelete size={20} />
        </button>
      </div>
    </li>
  );
};

export default TodoList;
