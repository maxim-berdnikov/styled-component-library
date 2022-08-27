import React, { CSSProperties } from "react";
import "./style.scss";

export const ParticlesLoader = (): JSX.Element => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span style={{ "--i": 1 } as CSSProperties}></span>
        <span style={{ "--i": 2 } as CSSProperties}></span>
        <span style={{ "--i": 3 } as CSSProperties}></span>
        <span style={{ "--i": 4 } as CSSProperties}></span>
        <span style={{ "--i": 5 } as CSSProperties}></span>
        <span style={{ "--i": 6 } as CSSProperties}></span>
        <span style={{ "--i": 7 } as CSSProperties}></span>
        <span style={{ "--i": 8 } as CSSProperties}></span>
        <span style={{ "--i": 9 } as CSSProperties}></span>
        <span style={{ "--i": 10 } as CSSProperties}></span>
      </div>
    </div>
  );
};
