import React from "react";
import style from "./Spinner.module.css";

function SuspenseSpinner(props) {
  return (
    <div className={style.spinner}>
      <svg
        style={{ color: "white" }}
        height="1em"
        width="1em"
        viewBox="0 0 56 56"
        {...props}
      >
        <g className={style.g}>
          <circle cx="28" cy="28" r="16" className={style.circle} />
        </g>
      </svg>
    </div>
  );
}

export default SuspenseSpinner;
