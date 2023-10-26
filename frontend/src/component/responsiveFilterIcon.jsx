import { useContext, useState } from "react";
import FilterIcon from "../asset/filter";
import { TodoContext } from "../context/todoContext";

export function ResponsiveFilterIcon() {
  const context = useContext(TodoContext);
  const { setStatus, status } = context;
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      {showFilter && (
        <div className="fixed bottom-20 right-5">
          <select
            onChange={(e) => {
              setStatus(e.target.value);
              setShowFilter(false);
            }}
            value={status}
            id="countries"
            className="bg-gray-50 md:hidden border w-[250px] text-gray-700 border-gray-300 text-sm rounded focus:ring-blue-500focus:border-blue-500 p-2.5"
          >
            <option value={""}>All</option>
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
      )}
      <div
        onClick={() => setShowFilter((prev) => !prev)}
        className="fixed flex items-center text-white md:hidden justify-center bg-blue-700 hover:bg-blue-600 h-[48px] w-[48px] rounded-full  bottom-5 right-5"
      >
        <FilterIcon />
      </div>
    </>
  );
}
