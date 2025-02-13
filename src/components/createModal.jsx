"use client";

import { createRoot } from "react-dom/client";
import Modal from "./modal";

export function CreateModal(title, children) {
  const contentElement = document.querySelector(".content");
  if (!contentElement) {
    console.error("Could not find .content element");
    return;
  }

  const modalRootContainer = document.createElement("div");
  modalRootContainer.classList.add("modalRootContainer");
  contentElement.appendChild(modalRootContainer);

  const root = createRoot(modalRootContainer);

  const handleClose = () => {
    root.unmount();
    contentElement.removeChild(modalRootContainer);
  };

  root.render(
    <Modal modalTitle={title} onClose={handleClose}>
      {children}
    </Modal>
  );

  return handleClose;
}
