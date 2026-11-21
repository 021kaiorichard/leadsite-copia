import { NextResponse } from "next/server";
import { getDb, makeId } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    const rows = userId
      ? db.prepare("SELECT * FROM appointments WHERE user_id = ? ORDER BY date ASC").all(userId)
      : db.prepare("SELECT * FROM appointments ORDER BY date ASC").all();

    return NextResponse.json(rows);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const db = getDb();
    const body = await req.json();
    const id = makeId();
    const now = new Date().toISOString();

    db.prepare(
      `INSERT INTO appointments (id, user_id, lead_id, title, date, type, status, notes, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      id,
      body.user_id || "default",
      body.lead_id || null,
      body.title || "",
      body.date || "",
      body.type || "MEETING",
      body.status || "SCHEDULED",
      body.notes || null,
      now,
      now
    );

    return NextResponse.json({ id, ...body }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
