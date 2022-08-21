import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import './index.css'

function App() {

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true)
    }, 5000);
  }, [])

  return (
    <div className="App">
      <button className="modal-btn" onClick={() => setOpenModal(!openModal)}>Modal</button>
      <Modal open={openModal} closeFunc={() => setOpenModal(false)} />
    </div>
  );
}

export default App;
