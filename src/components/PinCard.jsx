import React from "react";

export default function PinCard({ pin }) {
  return (
    <div className="pin">
      <img src={pin.image_url} alt={pin.title} style={{ width: "100%" }} />
      <h4>{pin.title}</h4>
    </div>
  );
}