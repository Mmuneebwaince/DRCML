import React from "react";
import "../styles/masonry.css";

export default function MasonryGrid({ pins }) {
  return (
    <div className="masonry">
      {pins.map((pin) => (
        <div className="pin" key={pin.id}>
          <img src={pin.image_url} alt={pin.title} style={{ width: "100%" }} />
          <h4>{pin.title}</h4>
        </div>
      ))}
    </div>
  );
}