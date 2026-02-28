import { supabase } from "../lib/supabase";

export async function getBoards() {
  const { data } = await supabase.from("boards").select("*");
  return data;
}

export async function createBoard(payload) {
  const { data } = await supabase.from("boards").insert([payload]);
  return data;
}