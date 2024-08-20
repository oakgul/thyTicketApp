import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="triangle">
          <i
            class="fa-solid fa-triangle-exclamation fa-2xl"
            style={{ color: "red" }}
          ></i>
          <p>Lütfen uçuşunuz için doğru kalkış ve varış noktalarını seçin.</p>
        </div>
        <div className="close-big-button-area">
          <button className="close-big-button" onClick={onClose}>
            KAPAT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
