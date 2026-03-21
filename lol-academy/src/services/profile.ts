import supabase from "../lib/supabase";

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) {
    console.error(error.message);
    throw new Error();
  }
  return data;
};
