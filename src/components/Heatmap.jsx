
import chroma from "chroma-js";

const Heatmap = () => {
  // Generate a scale from red to green to blue
  const scale = chroma.scale(["#f00", "#0f0", "#00f"]).mode("lab");

  // Simulate a range of values (0 to 1) for the heatmap
  const values = Array.from({ length: 10 }, (_, i) => i / 9);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Heatmap with Chroma.js</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        {values.map((value, index) => {
          const color = scale(value).hex(); // Map value to color
          return (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: chroma.contrast(color, "#fff") > 4.5 ? "#fff" : "#000",
                fontWeight: "bold",
              }}
            >
              {value.toFixed(1)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Heatmap;
