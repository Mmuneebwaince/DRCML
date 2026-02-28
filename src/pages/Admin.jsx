import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createBoard } from "../services/boardService";

export default function Admin() {
  const { role } = useContext(AuthContext);

  if (role !== "admin") {
    return <h2>Unauthorized</h2>;
  }

  async function handleCreate() {
    await createBoard({
      title: "New Board",
      description: "Admin created",
    });
  }

  return (
    <div>
      <button onClick={handleCreate}>Create Board</button>
    </div>
  );
}