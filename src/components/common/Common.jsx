import React from "react";
import { AiOutlineMinus } from "react-icons/ai";

const Common = ({ title }) => {
  return (
    <>
      <div className="sideHeading">
        <h2>
          <AiOutlineMinus />
          {title}
        </h2>
      </div>
    </>
  );
};

export default Common;
