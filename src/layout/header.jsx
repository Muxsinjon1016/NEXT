import React from "react";
import { MdOutlineMail } from "react-icons/md";
<MdOutlineMail />;

export const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white">
        <div className="container py-4">
          <img src="logo.svg" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
