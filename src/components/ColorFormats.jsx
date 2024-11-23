import { useState } from "react";
import chroma from "chroma-js";

const ColorFormats = () => {
  const [color, setColor] = useState("#ff6347"); // Initial color (Tomato)

  // Create a Chroma.js color object
  const chromaColor = chroma(color);

  // Extract different color formats
  const rgb = chromaColor.rgb(); // [255, 99, 71]
  const hsl = chromaColor.hsl(); // [9.13, 1, 0.64]
  const hex = chromaColor.hex(); // "#ff6347"
  const css = chromaColor.css(); // "rgb(255, 99, 71)"

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Chroma.js Color Formats</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <div style={{ marginTop: "10px", backgroundColor: color, padding: "20px" }}>
        <p style={{ color: chroma.contrast(color, "#fff") > 4.5 ? "#fff" : "#000" }}>
          <strong>Selected Color:</strong> {color}
        </p>
        <p>
          <strong>HEX:</strong> {hex}
        </p>
        <p>
          <strong>RGB:</strong> {`rgb(${rgb.join(", ")})`}
        </p>
        <p>
          <strong>HSL:</strong> {`hsl(${hsl[0].toFixed(2)}, ${hsl[1].toFixed(2)}, ${hsl[2].toFixed(2)})`}
        </p>
        <p>
          <strong>CSS String:</strong> {css}
        </p>
      </div>
    </div>
  );
};

export default ColorFormats;
