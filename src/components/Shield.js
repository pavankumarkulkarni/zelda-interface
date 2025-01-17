import React from "react";

export default function Shield({ w = "36", h = "34" }) {
  return (
    <div className=" inline-block fill-current">
      <svg
        width={w}
        height={h}
        viewBox="0 0 27 34"
        className="fill-current"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V20.5C3.10973 26.4374 6.13191 29.3755 13.5 34C19.9784 29.3423 22.9201 26.3784 27 20.5V0H0ZM13 29.5C18.0959 25.7852 20.3314 23.4621 23.5 19V3H3V20C5.96492 24.4169 8.56864 26.4775 13 29.5Z"
          // fill="#FFFFE5"
        />
        <path
          d="M5 19.5V5H21V19.5C18.3148 23.063 16.5755 24.8274 13 27.5C9.42841 25.0044 7.69243 23.2318 5 19.5Z"
          // fill="#FFFFE5"
        />
      </svg>
    </div>
  );
}
