import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const rows = db.prepare("SELECT * FROM tickets ORDER BY created_at DESC").all();
  return NextResponse.json({ tickets: rows });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { discord_username, category, plan_name, message } = body ?? {};

  if (!discord_username || !category) {
    return NextResponse.json(
      { error: "discord_username and category are required" },
      { status: 400 }
    );
  }

  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO tickets (discord_username, category, plan_name, message)
    VALUES (?, ?, ?, ?)
  `);
  const result = stmt.run(discord_username, category, plan_name ?? null, message ?? null);

  return NextResponse.json(
    { id: result.lastInsertRowid, status: "open" },
    { status: 201 }
  );
}
