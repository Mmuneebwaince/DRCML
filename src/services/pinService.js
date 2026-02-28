import { supabase } from "../lib/supabase";

export async function getPins(sectionId, limit, offset) {
  const { data } = await supabase
    .from("pins")
    .select("*")
    .eq("section_id", sectionId)
    .range(offset, offset + limit - 1);

  return data;
}

export async function createPin(payload) {
  const { data } = await supabase.from("pins").insert([payload]);
  return data;
}