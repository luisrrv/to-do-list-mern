import { useState } from "react";
import axios from "axios";
import { BiCheckCircle } from 'react-icons/bi'

function UpdateTodo({ _id, closeHandler, updateHandler }) {
  const [todoInfo, setTodoInfo] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setTodoInfo((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/todoapp/${_id}`, todoInfo)
      .then((res) => {
        setTodoInfo({ title: "", description: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        submitHanlder(e);
        updateHandler();
        closeHandler();
      }}
    >
      <label htmlFor="title" className="label">
        Title
      </label>
      <input
        type="text"
        name="title"
        className="input"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        Description
      </label>
      <input
        type="textarea"
        name="description"
        className="input"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
      <BiCheckCircle size={28} />
      </button>
    </form>
  );
}
export default UpdateTodo;
