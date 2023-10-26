import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export function Header({ openModal }) {
  const context = useContext(TodoContext);
  const { setStatus } = context;
  return (
    <div className="bg-blue-500 h-20 w-full flex items-center justify-between px-3 md:px-10 text-white fixed z-10 top-0">
      <div className="md:text-2xl text-lg">Pesto Todo App</div>
      <div className="flex flex-row gap-4">
        <select
          onChange={(e) => setStatus(e.target.value)}
          id="countries"
          className="bg-gray-50 hidden md:block border w-[250px] text-gray-700 border-gray-300 text-sm rounded focus:ring-blue-500focus:border-blue-500 p-2.5"
        >
          <option value={""}>All</option>
          <option value="to_do">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <div
          onClick={openModal}
          className="bg-white px-4 py-2 text-blue-500 cursor-pointer hover:text-blue-700 duration-100 rounded"
        >
          Add Todo
        </div>
      </div>
    </div>
  );
}
