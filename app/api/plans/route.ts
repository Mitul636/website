import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category");
  const db = getDb();

  const rows = category
    ? db.prepare("SELECT * FROM plans WHERE category = ? ORDER BY sort_order ASC").all(category)
    : db.prepare("SELECT * FROM plans ORDER BY category, sort_order ASC").all();

  return NextResponse.json({ plans: rows });
}
