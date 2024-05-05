import React from "react";
import C4 from "./C4";
import C5 from "./C5";
import C6 from "./C6";

export default function G2() {
  return (
    <div style={{ display: "flex", height: "40%", width: "100%" }}>
      <div className="GROUP1" style={{ width: "70%" }}>
        <C4></C4>
        <C5></C5>
      </div>

      <C6></C6>
    </div>
  );
}
