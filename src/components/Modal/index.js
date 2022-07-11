import React, { useEffect } from "react";

export default function Modal({ children, openModal, setOpenModal }) {
  console.log(openModal);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  useEffect(() => {
    if (openModal) {
      window.addEventListener(
        "click",
        (e) => {
          if (e.target.id === "modal") {
            setOpenModal(false);
          }
        },
        [setOpenModal]
      );
    }
  }, [setOpenModal]);

  return (
    <div
      id="modal"
      className="absolute h-screen z-50 w-full bg-black bg-opacity-60 top-0 left-0 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="min-w-max min-h-max absolute z-50 bg-white rounded-lg p-24 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
