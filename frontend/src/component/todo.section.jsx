import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { TodoContext } from "../context/todoContext";

const STATUS = {
  to_do: "To Do",
  in_progress: "In Progress",
  done: "Done",
};

const TodoBlock = ({
  title = "Title",
  description = "Description",
  status = "in_progress",
  id,
  setTodoList,
}) => {
  const [editMode, setEditMode] = useState(false);

  const deleteTodo = async (id) => {
    const response = await axios.delete(`http://localhost:5000/todo/${id}`);
    // console.log(response);
    if (response.status >= 200 && response.status < 300) {
      setTodoList((prev) => {
        const removeData = prev.filter((x) => x._id !== id);
        return removeData;
      });
    }
  };

  return (
    <div className="h-40 border border-solid w-full rounded p-4 flex flex-col">
      <div className="flex-1">
        <div className="flex flex-row gap-2">
          <div className="text-xl font-[700] flex-1">{title}</div>
          {!editMode && (
            <div
              className={`text-sm font-[400] text-blue-600 
            ${status === "in_progress" && "!text-green-600"}
            ${status === "done" && "!text-red-600"}
            `}
            >
              {STATUS[status]}
            </div>
          )}
          {editMode && (
            <div>
              <select className="border">
                <option value="to_do">To Do</option>
                <option value="in_progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          )}
        </div>
        <div className="font-[400]">{description}</div>
      </div>
      <div className="flex flex-row justify-end gap-2">
        {!editMode && (
          <>
            <div
              onClick={() => setEditMode(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white duration-100 rounded px-4 py-1 cursor-pointer"
            >
              Edit
            </div>

            <div
              onClick={() => deleteTodo(id)}
              className="bg-red-500 hover:bg-red-600 text-white duration-100 rounded px-4 py-1 cursor-pointer"
            >
              Delete
            </div>
          </>
        )}

        {editMode && (
          <>
            <div
              onClick={() => setEditMode(false)}
              className="bg-green-500 hover:bg-green-600 text-white duration-100 rounded px-4 py-1 cursor-pointer"
            >
              Save
            </div>
            <div
              onClick={() => setEditMode(false)}
              className="bg-red-500 hover:bg-red-600 text-white duration-100 rounded px-4 py-1 cursor-pointer"
            >
              Cancel
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export function TodoSection() {
  const context = useContext(TodoContext);
  const { todoList, setTodoList, setLoading } = context;

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/todo").then((res) => {
      if (res.status >= 200 && res.status < 300) {
        setTodoList(res.data.payload);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 m-4 relative top-20 pb-20 md:pb-0">
      {todoList.map((z) => {
        return (
          <TodoBlock
            key={z._id}
            id={z._id}
            title={z.title}
            description={z.description}
            status={z.status}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
}
