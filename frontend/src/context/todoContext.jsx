import { createContext, useState } from "react";

export const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <TodoContext.Provider
      value={{ todoList, loading, setTodoList, setLoading }}
    >
      {children}
    </TodoContext.Provider>
  );
};
