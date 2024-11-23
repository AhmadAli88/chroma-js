import { useState } from "react";
import chroma from "chroma-js";

const ContrastChecker = () => {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#000000");

  const contrast = chroma.contrast(color1, color2);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Contrast Checker</h3>
      <div>
        <label>
          Color 1:{" "}
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Color 2:{" "}
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
          />
        </label>
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: color1,
          color: color2,
        }}
      >
        Contrast Ratio: {contrast.toFixed(2)}{" "}
        {contrast >= 4.5 ? "(Accessible)" : "(Not Accessible)"}
      </div>
    </div>
  );
};

export default ContrastChecker;
