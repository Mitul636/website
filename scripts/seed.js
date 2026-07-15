// Run with: npm run seed
const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, "tigerhost.db"));
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS plans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    requirement TEXT,
    ram TEXT,
    cpu TEXT,
    storage TEXT,
    price_usd REAL,
    price_inr REAL,
    region TEXT,
    sort_order INTEGER DEFAULT 0
  );
  DELETE FROM plans;
`);

const insert = db.prepare(`
  INSERT INTO plans (category, name, requirement, ram, cpu, storage, price_usd, price_inr, region, sort_order)
  VALUES (@category, @name, @requirement, @ram, @cpu, @storage, @price_usd, @price_inr, @region, @sort_order)
`);

const rows = [
  // Server Boost VPS
  { category: "boost", name: "VPS Boost I", requirement: "1 Server Boost", ram: "16 GB", cpu: "4 vCPU", storage: "100 GB NVMe", price_usd: null, price_inr: null, region: "Any", sort_order: 1 },
  { category: "boost", name: "VPS Boost II", requirement: "2 Server Boosts", ram: "34 GB", cpu: "6 vCPU", storage: "150 GB NVMe", price_usd: null, price_inr: null, region: "Any", sort_order: 2 },
  { category: "boost", name: "VPS Boost III", requirement: "4 Server Boosts", ram: "48 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price_usd: null, price_inr: null, region: "Any", sort_order: 3 },

  // Invite-to-earn VPS
  { category: "invite_vps", name: "Invite Tier 10", requirement: "10 Invites", ram: "12 GB", cpu: "2 vCore", storage: "80 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 1 },
  { category: "invite_vps", name: "Invite Tier 20", requirement: "20 Invites", ram: "24 GB", cpu: "4 vCore", storage: "100 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 2 },
  { category: "invite_vps", name: "Invite Tier 30", requirement: "30 Invites", ram: "36 GB", cpu: "6 vCore", storage: "150 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 3 },
  { category: "invite_vps", name: "Invite Tier 40", requirement: "40 Invites", ram: "48 GB", cpu: "8 vCore", storage: "200 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 4 },

  // Free Minecraft (invite/boost)
  { category: "minecraft_free", name: "12 Invites", requirement: "12 Invites", ram: "8 GB", cpu: "200%", storage: "50 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 1 },
  { category: "minecraft_free", name: "25 Invites", requirement: "25 Invites", ram: "16 GB", cpu: "300%", storage: "50 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 2 },
  { category: "minecraft_free", name: "1 Boost", requirement: "Boost", ram: "8 GB", cpu: "250%", storage: "50 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 3 },
  { category: "minecraft_free", name: "2 Boosts", requirement: "2 Boosts", ram: "16 GB", cpu: "300%", storage: "50 GB", price_usd: null, price_inr: null, region: "Any", sort_order: 4 },

  // Premium Minecraft (paid)
  { category: "minecraft_paid", name: "Starter", requirement: null, ram: "4 GB", cpu: "150%", storage: "20 GB NVMe", price_usd: 0.99, price_inr: null, region: "Singapore & India", sort_order: 1 },
  { category: "minecraft_paid", name: "Builder", requirement: null, ram: "8 GB", cpu: "250%", storage: "35 GB NVMe", price_usd: 1.99, price_inr: null, region: "Singapore & India", sort_order: 2 },
  { category: "minecraft_paid", name: "Explorer", requirement: null, ram: "12 GB", cpu: "350%", storage: "50 GB NVMe", price_usd: 3.99, price_inr: null, region: "Singapore & India", sort_order: 3 },
  { category: "minecraft_paid", name: "Titan", requirement: null, ram: "24 GB", cpu: "600%", storage: "100 GB NVMe", price_usd: 6.99, price_inr: null, region: "Any Available Location", sort_order: 4 },
  { category: "minecraft_paid", name: "Colossus", requirement: null, ram: "32 GB", cpu: "800%", storage: "150 GB NVMe", price_usd: 9.99, price_inr: null, region: "Any Available Location", sort_order: 5 },
  { category: "minecraft_paid", name: "Infinity", requirement: null, ram: "48 GB", cpu: "1200%", storage: "200 GB NVMe", price_usd: 12.99, price_inr: null, region: "Any Available Location", sort_order: 6 },

  // Cloud VPS (paid)
  { category: "cloud_vps", name: "Cloud VPS 10", requirement: null, ram: "8 GB", cpu: "4 vCPU", storage: "75 GB NVMe", price_usd: 4.50, price_inr: 429, region: "Any", sort_order: 1 },
  { category: "cloud_vps", name: "Cloud VPS 20", requirement: null, ram: "16 GB", cpu: "6 vCPU", storage: "100 GB NVMe", price_usd: 6.99, price_inr: 659, region: "Any", sort_order: 2 },
  { category: "cloud_vps", name: "Cloud VPS 30", requirement: null, ram: "24 GB", cpu: "8 vCPU", storage: "200 GB NVMe", price_usd: 8.50, price_inr: 809, region: "Any", sort_order: 3 },
  { category: "cloud_vps", name: "Cloud VPS 40", requirement: null, ram: "32 GB", cpu: "12 vCPU", storage: "250 GB NVMe", price_usd: 16.99, price_inr: 1599, region: "Any", sort_order: 4 },
  { category: "cloud_vps", name: "Cloud VPS 50", requirement: null, ram: "48 GB", cpu: "16 vCPU", storage: "300 GB NVMe", price_usd: 24.99, price_inr: 2359, region: "Any", sort_order: 5 },
  { category: "cloud_vps", name: "Cloud VPS 60", requirement: null, ram: "64 GB", cpu: "18 vCPU", storage: "350 GB NVMe", price_usd: 32.99, price_inr: 3099, region: "Any", sort_order: 6 }
];

const insertMany = db.transaction((items) => {
  for (const item of items) insert.run(item);
});
insertMany(rows);

console.log(`Seeded ${rows.length} plans into data/tigerhost.db`);
