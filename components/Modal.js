import React from "react";

const ModalPopUp = ({ content, onClose }) => {
  


  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {content}
      </div>
    </div>
  );
};

export default ModalPopUp;
