import { useState } from "react";
import chroma from "chroma-js";

const GradientGenerator = () => {
  const [startColor, setStartColor] = useState("#ff0000");
  const [endColor, setEndColor] = useState("#0000ff");

  // Generate gradient with 5 steps
  const gradientColors = chroma.scale([startColor, endColor]).colors(5);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Gradient Generator</h3>
      <div style={{ marginBottom: "10px" }}>
        <label>
          Start Color:{" "}
          <input
            type="color"
            value={startColor}
            onChange={(e) => setStartColor(e.target.value)}
          />
        </label>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>
          End Color:{" "}
          <input
            type="color"
            value={endColor}
            onChange={(e) => setEndColor(e.target.value)}
          />
        </label>
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        {gradientColors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              height: "50px",
              flex: 1,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GradientGenerator;
