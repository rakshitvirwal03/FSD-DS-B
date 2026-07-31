import React from "react";

const Book = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        border: "1px solid #ccc",
        width: "300px",
        height: "350px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{ color: "red" }}>Book Shop</h3>
      <img
        src="https://template.canva.com/EAFrDcoy358/2/0/1131w-PqMkVRne_2g.jpg"
        alt="Book"
        style={{ width: "100px", height: "150px" }}
      />
      <h3>BUSINESS BOOK</h3>
      <h4>600</h4>
    </div>
  );
};

export default Book;
