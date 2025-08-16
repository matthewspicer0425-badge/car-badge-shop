import React, { useState } from "react";

function App() {
  const [badgeText, setBadgeText] = useState("My Car");
  const [badgeColor, setBadgeColor] = useState("#ff0000");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Custom Car Badge Shop</h1>
      <p>Create your own personalized car name badge!</p>

      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={badgeText}
          onChange={(e) => setBadgeText(e.target.value)}
          placeholder="Enter badge text"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="color"
          value={badgeColor}
          onChange={(e) => setBadgeColor(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      <div
        style={{
          display: "inline-block",
          padding: "20px 40px",
          borderRadius: "8px",
          backgroundColor: badgeColor,
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          margin: "20px 0",
        }}
      >
        {badgeText}
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Checkout system coming soon!")}
        >
          Buy Badge
        </button>
      </div>
    </div>
  );
}

export default App;
