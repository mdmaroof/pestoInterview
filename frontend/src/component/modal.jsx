import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";
import axios from "axios";

export function Modal({ openModal, closeModal }) {
  const context = useContext(TodoContext);
  const { setTodoList, setLoading, loading } = context;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const submitData = async () => {
    if (loading) return;
    if (!title) {
      alert("Title Required");
      return;
    }
    if (!description) {
      alert("Description Required");
      return;
    }
    if (!status) {
      alert("Status Required");
      return;
    }

    const payload = {
      title,
      description,
      status,
    };

    setLoading(true);
    const res = await axios.post("http://localhost:5000/todo", payload);
    if (res.status >= 200 && res.status < 300) {
      const { response } = res.data;
      setTodoList((prev) => [...prev, response]);
      setTitle("");
      setDescription("");
      setStatus("");
      closeModal();
    }
    setLoading(false);
  };

  return (
    <>
      {openModal && (
        <div
          onClick={closeModal}
          className="fixed grid place-items-center top-0 left-0 bg-modalBackground w-full h-full z-20"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white w-[90%] md:w-[50%] rounded p-3"
          >
            <div className="flex flex-row items-center border-b pb-4">
              <div className="text-3xl flex-1">Add Todo List</div>
              <div
                onClick={closeModal}
                className="text-2xl cursor-pointer duration-100"
              >
                X
              </div>
            </div>

            <div className="pt-4">
              <div className="flex flex-col mb-2">
                <label>Title</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Title"
                  className="border rounded px-2 py-2"
                />
              </div>

              <div className="flex flex-col mb-2">
                <label>Description</label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Description"
                  className="border rounded px-2 py-2"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label>Status</label>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  id="countries"
                  className="border w-full rounded px-2 py-2.5"
                >
                  <option value={""}>Please Select Status</option>
                  <option value="to_do">To Do</option>
                  <option value="in_progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>

              <div
                onClick={submitData}
                className="px-4 inline-block py-2 rounded text-white bg-blue-600 hover:bg-blue-700 duration-100 my-4 cursor-pointer"
              >
                Add Todo List
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
