import { useState } from "react";
import chroma from "chroma-js";

const LuminanceCalculator = () => {
  const [color, setColor] = useState("#00ff00"); // Initial color (green)

  // Calculate luminance
  const luminance = chroma(color).luminance();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Luminance Calculator with Chroma.js</h3>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Choose a Color:</strong>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <div>
        <h4>Color:</h4>
        <div
          style={{
            backgroundColor: color,
            width: "150px",
            height: "100px",
            margin: "0 auto",
            borderRadius: "8px",
            lineHeight: "100px",
            color: chroma.contrast(color, "#fff") > 4.5 ? "#fff" : "#000",
            fontWeight: "bold",
          }}
        >
          {color}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>Luminance Value:</h4>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {luminance.toFixed(3)} {/* Display luminance with 3 decimal places */}
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>Brightness Level:</h4>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color:
              luminance < 0.2
                ? "red"
                : luminance < 0.5
                ? "orange"
                : "green", // Categorize brightness levels
          }}
        >
          {luminance < 0.2
            ? "Dark"
            : luminance < 0.5
            ? "Moderate"
            : "Bright"}
        </p>
      </div>
    </div>
  );
};

export default LuminanceCalculator;
