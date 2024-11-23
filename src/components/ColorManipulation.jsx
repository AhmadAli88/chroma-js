import  { useState } from "react";
import chroma from "chroma-js";

const ColorManipulation = () => {
  const [baseColor, setBaseColor] = useState("#3498db"); // Initial base color
  const [brightness, setBrightness] = useState(2); // Brighten level
  const [saturation, setSaturation] = useState(2); // Saturate level

  // Calculate manipulated colors
  const brighterColor = chroma(baseColor).brighten(brightness).hex();
  const saturatedColor = chroma(baseColor).saturate(saturation).hex();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h3>Color Manipulation with Chroma.js</h3>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Base Color:</strong>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Brightness:</strong>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={brightness}
            onChange={(e) => setBrightness(parseFloat(e.target.value))}
            style={{ marginLeft: "10px", width: "200px" }}
          />
          <span style={{ marginLeft: "10px" }}>{brightness}</span>
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Saturation:</strong>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={saturation}
            onChange={(e) => setSaturation(parseFloat(e.target.value))}
            style={{ marginLeft: "10px", width: "200px" }}
          />
          <span style={{ marginLeft: "10px" }}>{saturation}</span>
        </label>
      </div>
      <div>
        <h4>Manipulated Colors:</h4>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: brighterColor,
                width: "100px",
                height: "100px",
                margin: "0 auto",
                borderRadius: "8px",
              }}
            ></div>
            <p><strong>Brighter:</strong> {brighterColor}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: saturatedColor,
                width: "100px",
                height: "100px",
                margin: "0 auto",
                borderRadius: "8px",
              }}
            ></div>
            <p><strong>Saturated:</strong> {saturatedColor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorManipulation;
