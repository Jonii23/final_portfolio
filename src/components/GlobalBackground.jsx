import React, { useEffect } from "react";
import { startLanding3D } from "./Landing/three-landing";
import "./GlobalBackground.css";

export default function GlobalBackground() {
  useEffect(() => {
    const cleanup = startLanding3D();
    return () => { if (cleanup) cleanup(); };
  }, []);

  return (
    <div className="global-bg-wrapper">
      <canvas id="canvas3d"></canvas>

      <div className="bg-floating-shapes">
        <div className="bg-shape"></div>
        <div className="bg-shape"></div>
      </div>
    </div>
  );
}
