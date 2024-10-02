import React from "react";
import img from "../Images/brain-tumor.jpg";
import Register1 from "./Register1";

const Register = () => {
  return (
    <div className="register">
      <div className="regc1">
        <img src={img} alt="Brain Tumor" />
      </div>
      <div className="regc2 mt-80">
        <Register1 />
      </div>
    </div>
  );
};

export default Register;
