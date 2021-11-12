import React, { useState } from "react";
import Modal from "react-modal";
import '../../App.css'
import Form from "./components/Form";

Modal.setAppElement("#root");
function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button className="login" onClick={() => setIsModalOpen(true)}>
        Log In
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {},
          content: {
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="App">
          <Form />
        </div>
      </Modal>
    </>
  );
}

export default Login;
