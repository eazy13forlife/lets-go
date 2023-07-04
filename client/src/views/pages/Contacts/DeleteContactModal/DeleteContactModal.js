import React from "react";
import ModalContainer from "../../../../components/ModalContainer/ModalContainer.js";

import "./DeleteContactModal.scss";

const DeleteContactModal = ({ closeModal, onDelete, message }) => {
  return (
    <ModalContainer closeModal={closeModal}>
      <div className="DeleteCard">
        {message}
        <div className="DeleteCard__actions">
          <button
            className="button-main button-main--danger"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="button-main button-main--primary"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteContactModal;
