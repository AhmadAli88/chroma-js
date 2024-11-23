import  { useState } from "react";
import chroma from "chroma-js";

const BlendColors = () => {
  // State to store the two colors to mix
  const [color1, setColor1] = useState("#ff0000"); // Red
  const [color2, setColor2] = useState("#0000ff"); // Blue
  const [ratio, setRatio] = useState(0.5); // Mixing ratio (0 = color1, 1 = color2)

  // Blend the two colors using Chroma.js
  const blendedColor = chroma.mix(color1, color2, ratio).hex();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Blending Colors with Chroma.js</h3>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Color 1:</strong>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Color 2:</strong>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Mix Ratio:</strong>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={ratio}
            onChange={(e) => setRatio(parseFloat(e.target.value))}
            style={{ marginLeft: "10px", width: "200px" }}
          />
          <span style={{ marginLeft: "10px" }}>{ratio}</span>
        </label>
      </div>
      <div>
        <h4>Blended Color:</h4>
        <div
          style={{
            backgroundColor: blendedColor,
            width: "200px",
            height: "100px",
            margin: "0 auto",
            lineHeight: "100px",
            color: chroma.contrast(blendedColor, "#fff") > 4.5 ? "#fff" : "#000",
            fontWeight: "bold",
          }}
        >
          {blendedColor}
        </div>
      </div>
    </div>
  );
};

export default BlendColors;
