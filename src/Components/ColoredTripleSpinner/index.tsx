import React from "react";
import "./style.scss";

export const ColoredTripleSpinner = (): JSX.Element => {
  return (
    <div className="spinner">
      Loading
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  );
};
