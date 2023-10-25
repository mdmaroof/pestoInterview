export function Header({ openModal }) {
  return (
    <div className="bg-blue-500 h-20 w-full flex items-center justify-between px-10 text-white sticky top-0">
      <div className="text-2xl">Pesto Todo App</div>
      <div className="flex flex-row gap-4">
        <select
          onChange={(e) => console.log(e.target.value)}
          id="countries"
          className="bg-gray-50 border w-[250px] text-gray-700 border-gray-300 text-sm rounded focus:ring-blue-500focus:border-blue-500 block p-2.5"
        >
          <option value={null}>All</option>
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
