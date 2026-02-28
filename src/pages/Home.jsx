import { useEffect, useState } from "react";
import { getBoards } from "../services/boardService";
import BoardCard from "../components/BoardCard";

export default function Home() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards().then(setBoards);
  }, []);

  return (
    <div>
      <h1>Boards</h1>
      <div>
        {boards.map((b) => (
          <BoardCard key={b.id} board={b} />
        ))}
      </div>
    </div>
  );
}