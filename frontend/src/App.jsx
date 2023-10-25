import { useState } from "react";
import { Header } from "./component/header";
import { Modal } from "./component/modal";
import { TodoSection } from "./component/todo.section";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
      <Header openModal={() => setOpenModal(true)} />
      <TodoSection />
    </>
  );
}

export default App;
