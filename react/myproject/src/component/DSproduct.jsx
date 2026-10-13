import React from "react";
import cat from "./assets/cat.jpg";

function DSProduct() {
  return (
    <div>
      <h2
        style={{
          color: "brown",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        Image Manipulation
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img src={cat} width="300" height="300" alt="Cat" />
      </div>
    </div>
  );
}

export default DSProduct;
