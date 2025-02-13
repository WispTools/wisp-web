import { X } from "lucide-react";

import "@/style/modal.css";

export default function Modal({ modalTitle = "Unnamed Modal", children }) {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalHeader">
          <div className="modalTitle">{modalTitle}</div>
          <button className="modalClose">
            <X />
          </button>
        </div>
        <div className="modalContent">{children}</div>
      </div>
    </div>
  );
}
