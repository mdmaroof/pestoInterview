import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./component/header";
import { Modal } from "./component/modal";
import { TodoSection } from "./component/todo.section";
import { TodoProvider } from "./context/todoContext";


import "react-toastify/dist/ReactToastify.css";
import { ResponsiveFilterIcon } from "./component/responsiveFilterIcon";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TodoProvider>
        <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
        <Header openModal={() => setOpenModal(true)} />
        <TodoSection />
        <ResponsiveFilterIcon />
        <ToastContainer />
      </TodoProvider>
    </>
  );
}

export default App;
