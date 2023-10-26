import { createContext, useState } from "react";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const filterList =
    (status && todoList.filter((z) => z.status === status)) || todoList;
  return (
    <TodoContext.Provider
      value={{
        todoList: filterList,
        loading,
        setTodoList,
        setLoading,
        setStatus,
        status,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
