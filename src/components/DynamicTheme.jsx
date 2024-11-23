import { useState } from "react";
import chroma from "chroma-js";

const DynamicTheme = () => {
  const [baseColor, setBaseColor] = useState("#3498db");

  // Generate lighter and darker shades
  const lightShade = chroma(baseColor).brighten(1).hex();
  const darkShade = chroma(baseColor).darken(1).hex();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        type="color"
        value={baseColor}
        onChange={(e) => setBaseColor(e.target.value)}
      />
      <div
        style={{
          marginTop: "20px",
          background: baseColor,
          color: chroma.contrast(baseColor, "#fff") > 4.5 ? "#fff" : "#000",
          padding: "20px",
        }}
      >
        Base Color: {baseColor}
      </div>
      <div
        style={{
          marginTop: "20px",
          background: lightShade,
          color: chroma.contrast(lightShade, "#fff") > 4.5 ? "#fff" : "#000",
          padding: "20px",
        }}
      >
        Light Shade: {lightShade}
      </div>
      <div
        style={{
          marginTop: "20px",
          background: darkShade,
          color: chroma.contrast(darkShade, "#fff") > 4.5 ? "#fff" : "#000",
          padding: "20px",
        }}
      >
        Dark Shade: {darkShade}
      </div>
    </div>
  );
};

export default DynamicTheme;
