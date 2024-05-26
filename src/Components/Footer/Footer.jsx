import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="bg-dark position-absolute w-100">
      <p className="text-light text-center p-3">{new Date().getFullYear()} My React App. All rights reserved.</p>
    </div>
  );
};

export default Footer;
