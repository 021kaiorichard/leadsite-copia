import { createClient, SupabaseClient } from "@supabase/supabase-js";

export const DEFAULT_USER_ID = "default";

let client: SupabaseClient | null = null;

/**
 * Cliente Supabase lazy — só lê as variáveis de ambiente no primeiro uso,
 * assim o `next build` nunca falha por variáveis ausentes.
 */
export function getDb(): SupabaseClient {
  if (!client) {
    const url = process.env.DATABASE_URL;
    const key =
      process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      throw new Error(
        "Variáveis de ambiente DATABASE_URL e SUPABASE_ANON_KEY não configuradas."
      );
    }

    client = createClient(url, key);
  }
  return client;
}

/**
 * Garante que existe um usuário padrão (satisfaz as foreign keys das tabelas).
 * Falha silenciosamente se já existir ou se o RLS bloquear.
 */
export async function ensureDefaultUser(): Promise<void> {
  try {
    await getDb()
      .from("users")
      .upsert(
        { id: DEFAULT_USER_ID, email: "default@leadsite.local", name: "LeadSite" },
        { onConflict: "id", ignoreDuplicates: true }
      );
  } catch {
    // ignora — usuário provavelmente já existe
  }
}

export function makeId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
