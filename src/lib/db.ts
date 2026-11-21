import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const isServer = typeof window === "undefined";

let db: Database.Database | null = null;

export function getDb() {
  if (!isServer) {
    throw new Error("Acesso ao banco apenas no servidor");
  }
  if (!db) {
    const dbPath = process.env.DATABASE_PATH || path.join(process.cwd(), "dev.db");
    db = new Database(dbPath);
    db.pragma("journal_mode = WAL");
    initDb(db);
  }
  return db;
}

function initDb(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      clerk_id TEXT UNIQUE,
      email TEXT UNIQUE,
      name TEXT,
      image_url TEXT,
      plan TEXT DEFAULT 'FREE',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      city TEXT NOT NULL,
      region TEXT NOT NULL,
      phone TEXT,
      whatsapp TEXT,
      email TEXT,
      website_url TEXT,
      has_website INTEGER DEFAULT 0,
      site_down INTEGER DEFAULT 0,
      no_ssl INTEGER DEFAULT 0,
      no_contact INTEGER DEFAULT 0,
      status TEXT DEFAULT 'COLD',
      score INTEGER DEFAULT 0,
      notes TEXT,
      in_crm INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS websites (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lead_id TEXT UNIQUE,
      title TEXT NOT NULL,
      subtitle TEXT,
      slug TEXT UNIQUE,
      address TEXT,
      published INTEGER DEFAULT 0,
      content TEXT DEFAULT '{}',
      theme TEXT DEFAULT 'default',
      version INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (lead_id) REFERENCES leads(id)
    );

    CREATE TABLE IF NOT EXISTS website_versions (
      id TEXT PRIMARY KEY,
      website_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (website_id) REFERENCES websites(id)
    );

    CREATE TABLE IF NOT EXISTS crm_stages (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT NOT NULL,
      color TEXT DEFAULT '#0071E3',
      position INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS crm_items (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lead_id TEXT UNIQUE,
      stage_id TEXT NOT NULL,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (lead_id) REFERENCES leads(id),
      FOREIGN KEY (stage_id) REFERENCES crm_stages(id)
    );

    CREATE TABLE IF NOT EXISTS appointments (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lead_id TEXT NOT NULL,
      title TEXT NOT NULL,
      date DATETIME NOT NULL,
      type TEXT DEFAULT 'MEETING',
      status TEXT DEFAULT 'SCHEDULED',
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (lead_id) REFERENCES leads(id)
    );

    CREATE TABLE IF NOT EXISTS scripts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lead_id TEXT,
      type TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (lead_id) REFERENCES leads(id)
    );
  `);

  // Inserir estágios padrão do CRM se não existirem
  const existing = db
    .prepare("SELECT COUNT(*) as count FROM crm_stages WHERE user_id = ?")
    .get("default") as { count: number };

  if (!existing || existing.count === 0) {
    const insertStage = db.prepare(
      "INSERT INTO crm_stages (id, user_id, name, color, position) VALUES (?, ?, ?, ?, ?)"
    );
    const stages = [
      ["stage_novo", "default", "Novo", "#0071E3", 0],
      ["stage_contato", "default", "Contato", "#0A3D2A", 1],
      ["stage_proposta", "default", "Proposta Enviada", "#B26B00", 2],
      ["stage_negociacao", "default", "Negociação", "#D92D20", 3],
      ["stage_fechado", "default", "Fechado", "#1A7E3A", 4],
    ];
    for (const stage of stages) {
      insertStage.run(...stage);
    }
  }
}

// Helper para gerar IDs
export function makeId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
