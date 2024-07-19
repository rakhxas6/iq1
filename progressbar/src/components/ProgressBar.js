import React, { useEffect, useState } from "react";
import { MAX, MIN } from "../Constants";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));

    if (value >= MAX) {
      onComplete();
    }
  }, [value, onComplete]);
  return (
    <div className="progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()} %
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / 100}`,
          transformOrigin: "left",
        }}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      />
    </div>
  );
};

export default ProgressBar;
