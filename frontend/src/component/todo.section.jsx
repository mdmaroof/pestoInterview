const STATUS = {
  to_do: "To Do",
  in_progress: "In Progress",
  done: "Done",
};

const TodoBlock = ({
  title = "Title",
  description = "Description",
  status = "in_progress",
}) => {
  return (
    <div className="h-40 border border-solid w-full rounded p-4 flex flex-col">
      <div className="flex-1">
        <div className="flex flex-row gap-2">
          <div className="text-xl font-semibold flex-1">{title}</div>
          <div
            className={`text-sm font-light text-blue-600 
            ${status === "in_progress" && "!text-green-600"}
            ${status === "done" && "!text-red-600"}
            `}
          >
            {STATUS[status]}
          </div>
        </div>
        <div>{description}</div>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <div className="bg-blue-500 hover:bg-blue-600 text-white duration-100 rounded px-4 py-1 cursor-pointer">
          Edit
        </div>
        <div className="bg-red-500 hover:bg-red-600 text-white duration-100 rounded px-4 py-1 cursor-pointer">
          Delete
        </div>
      </div>
    </div>
  );
};

export function TodoSection() {
  return (
    <div className="grid grid-cols-4 gap-4 m-4">
      <TodoBlock />
    </div>
  );
}
