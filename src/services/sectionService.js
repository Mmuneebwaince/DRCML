import { supabase } from "../lib/supabase";

export async function getSections(boardId) {
  const { data } = await supabase
    .from("sections")
    .select("*")
    .eq("board_id", boardId);
  return data;
}