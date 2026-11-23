import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.DATABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Variáveis de ambiente DATABASE_URL e SUPABASE_ANON_KEY não configuradas.");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export function makeId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}