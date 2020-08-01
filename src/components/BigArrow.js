import React from "react";

export default function BigArrow({ w = "30", h = "80", a = "0" }) {
  return (
    <div className="fill-current">
      <svg
        width={w}
        height={h}
        viewBox="0 0 46 100"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform={`rotate(${a})`}
      >
        <path
          d="M46 47.9381L0 0L17 47.9381L0 100L46 47.9381Z"
          // fill="#FDFEE7"
        />
      </svg>
    </div>
  );
}
