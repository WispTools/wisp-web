"use client";

import { X } from "lucide-react";
import "@/style/modal.css";

export default function Modal({
  modalTitle = "Unnamed Modal",
  children,
  onClose,
}) {
  const closeModal = () => {
    if (onClose) {
      onClose();
    } else {
      const modalContainer = document.querySelector(".modalContainer");
      modalContainer?.remove();
    }
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalHeader">
          <div className="modalTitle">{modalTitle}</div>
          <button className="modalClose" onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="modalContent">{children}</div>
      </div>
    </div>
  );
}
