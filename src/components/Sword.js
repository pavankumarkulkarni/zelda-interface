import React from "react";

export default function Sword({ w = "36", h = "34" }) {
  return (
    <div className="inline-block">
      <svg
        className="fill-current"
        width={w}
        height={h}
        viewBox="0 0 44 46"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 35L6 45.5L0 39.5L10 29.5L2 21.5L6 17.5L26.5 38L23 41.5L16.5 35Z"
          // fill="#FFFEE5"
        />
        <path
          d="M33.5 2L13.5 22L17.5 25L26.5 16L29 18.5L19.5 28L22 31.5L43.5 10V0L33.5 2Z"
          // fill="#FFFEE5"
        />
      </svg>
    </div>
  );
}
