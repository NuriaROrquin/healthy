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
      <div className="relative w-11/12 h-11/12 lg:w-1/4 lg:min-w-max min-h-max z-50 bg-white rounded-lg p-12 lg:p-24 flex flex-col justify-center items-center overflow-y-scroll">
        {children}
        <button
          className="absolute text-gray-500 z-50 top-0 right-0 m-8"
          onClick={() => setOpenModal(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}
