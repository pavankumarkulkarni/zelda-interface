import React from "react";
// import { motion } from "framer-motion";

export default function TraingleBox() {
  return (
    <>
      <div
        style={{
          animationName: "topLeft",
          animationDuration: "1s",
          animationIterationCount: "infinite",
        }}
        className="absolute top-0 left-0 zelda-botw-triangle-up transform -rotate-45 inline-block -mx-1"
      ></div>
      <div
        style={{
          animationName: "topRight",
          animationDuration: "1s",
          animationIterationCount: "infinite",
        }}
        className="absolute top-0 right-0 zelda-botw-triangle-up transform rotate-45 inline-block -mx-1"
      ></div>
      <div
        style={{
          animationName: "bottomLeft",
          animationDuration: "1s",
          animationIterationCount: "infinite",
        }}
        className="absolute bottom-0 left-0 zelda-botw-triangle-down transform rotate-45 inline-block -mx-1"
      ></div>
      <div
        style={{
          animationName: "bottomRight",
          animationDuration: "1s",
          animationIterationCount: "infinite",
        }}
        className="absolute bottom-0 right-0 zelda-botw-triangle-down transform -rotate-45 inline-block z-20 -mx-1"
      ></div>
    </>
  );
}
