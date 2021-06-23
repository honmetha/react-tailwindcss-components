import * as React from "react";
import classNames from "classnames";

const Modal = () => {
  const [show, setShow] = React.useState(true);

  const handleCloseModal = (e) => {
    if (e.target.classList.contains("fixed")) {
      setShow(false);
    }
  };

  return (
    <div
      className={classNames(
        "modal-in fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transform scale-0",
        { "modal-out": !show }
      )}
      onClick={handleCloseModal}
    >
      <div className="modal-background">
        <img
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80"
          alt="Beach"
          width="400"
          className="modal"
        />
      </div>
    </div>
  );
};

export default Modal;
