import { NextResponse } from "next/server";
import { getDb, makeId } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    const rows = userId
      ? db.prepare("SELECT * FROM crm_items WHERE user_id = ? ORDER BY created_at DESC").all(userId)
      : db.prepare("SELECT * FROM crm_items ORDER BY created_at DESC").all();

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
      `INSERT INTO crm_items (id, user_id, lead_id, stage_id, notes, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).run(id, body.user_id || "default", body.lead_id, body.stage_id, body.notes || null, now, now);

    return NextResponse.json({ id, ...body }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
