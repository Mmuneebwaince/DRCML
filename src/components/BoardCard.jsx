import React from "react";
import { Link } from "react-router-dom";

export default function BoardCard({ board }) {
  return (
    <div className="board-card">
      <h3>{board.title}</h3>
      <p>{board.description}</p>
      <Link to={`/board/${board.id}`}>View</Link>
    </div>
  );
}