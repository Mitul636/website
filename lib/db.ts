import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DB_PATH = path.join(process.cwd(), "data", "tigerhost.db");

function ensureDataDir() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

let db: Database.Database | null = null;

export function getDb() {
  if (db) return db;
  ensureDataDir();
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS plans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,       -- 'boost' | 'minecraft_free' | 'minecraft_paid' | 'cloud_vps' | 'invite_vps'
      name TEXT NOT NULL,
      requirement TEXT,             -- e.g. '2 Server Boosts', '20 Invites'
      ram TEXT,
      cpu TEXT,
      storage TEXT,
      price_usd REAL,
      price_inr REAL,
      region TEXT,
      sort_order INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      discord_username TEXT NOT NULL,
      category TEXT NOT NULL,
      plan_name TEXT,
      message TEXT,
      status TEXT NOT NULL DEFAULT 'open',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  return db;
}
