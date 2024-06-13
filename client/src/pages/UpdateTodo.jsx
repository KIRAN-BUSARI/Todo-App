import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { Link } from "react-router-dom";

function UpdateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axiosInstance.post(`/todo/updateTodo/`, { title, description });
    } catch (error) {
      console.error("Error creating todo:", error);
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md h-screen flex justify-center items-center flex-col">
      <h2 className="text-lg font-semibold mb-2">Update Todo</h2>
      <form onSubmit={handleSubmit} className="w-1/2">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update Todo
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          to={"/"}
        >
          Show All Todos
        </Link>
      </div>
    </div>
  );
}

export default UpdateTodo;
