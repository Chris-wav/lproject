import supabase from "../lib/supabase";

export const getLeaderboard = async () => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username, xp, streak, correct_answers, avatar")
    .order("xp", { ascending: false })
    .limit(50);

  if (error) {
    console.error(error.message);
    throw new Error();
  }
  return data;
};
