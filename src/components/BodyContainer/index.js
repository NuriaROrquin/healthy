import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";

export default function BodyContainer({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {children}

      <Footer />
    </>
  );
}
