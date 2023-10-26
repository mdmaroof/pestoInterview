import { useState } from "react";
import { Header } from "./component/header";
import { Modal } from "./component/modal";
import { TodoSection } from "./component/todo.section";
import { TodoProvider } from "./context/todoContext";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TodoProvider>
        <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
        <Header openModal={() => setOpenModal(true)} />
        <TodoSection />

        <div className="fixed flex items-center text-white md:hidden justify-center bg-blue-700 hover:bg-blue-600 h-12 rounded-full w-12 bottom-5 right-5">
          X
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
