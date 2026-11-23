import { NextResponse } from "next/server";
import { getDb, ensureDefaultUser, makeId, DEFAULT_USER_ID } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    let query = db.from("appointments").select("*").order("date", { ascending: true });
    if (userId) query = query.eq("user_id", userId);

    const { data, error } = await query;
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(data ?? []);
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

    await ensureDefaultUser();

    const row = {
      id,
      user_id: body.user_id || DEFAULT_USER_ID,
      lead_id: body.lead_id || null,
      title: body.title || "",
      date: body.date || now,
      type: body.type || "MEETING",
      status: body.status || "SCHEDULED",
      notes: body.notes || null,
      created_at: now,
      updated_at: now,
    };

    const { error } = await db.from("appointments").insert(row);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(row, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
