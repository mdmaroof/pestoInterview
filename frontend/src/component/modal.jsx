export function Modal({ openModal, closeModal }) {
  return (
    <>
      {openModal && (
        <div
          onClick={closeModal}
          className="fixed grid place-items-center top-0 left-0 bg-modalBackground w-full h-full z-10"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white w-[50%] rounded p-5"
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
                  placeholder="Title"
                  className="border rounded px-2 py-2"
                />
              </div>

              <div className="flex flex-col mb-2">
                <label>Description</label>
                <input
                  placeholder="Description"
                  className="border rounded px-2 py-2"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label>Status</label>
                <select
                  onChange={(e) => console.log(e.target.value)}
                  id="countries"
                  className="border w-full rounded px-2 py-2.5"
                >
                  <option value={null}>Please Select Status</option>
                  <option value="to_do">To Do</option>
                  <option value="in_progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>

              <div className="px-4 inline-block py-2 rounded text-white bg-blue-600 hover:bg-blue-700 duration-100 my-4 cursor-pointer">
                Add Todo List
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
