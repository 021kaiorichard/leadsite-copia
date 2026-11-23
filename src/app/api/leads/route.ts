import { NextResponse } from "next/server";
import { getDb, ensureDefaultUser, makeId, DEFAULT_USER_ID } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    let query = db.from("leads").select("*").order("created_at", { ascending: false });
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
      name: body.name || "",
      category: body.category || "",
      city: body.city || "",
      region: body.region || "",
      phone: body.phone || null,
      whatsapp: body.whatsapp || null,
      email: body.email || null,
      website_url: body.website_url || null,
      has_website: body.has_website ? 1 : 0,
      site_down: body.site_down ? 1 : 0,
      no_ssl: body.no_ssl ? 1 : 0,
      no_contact: body.no_contact ? 1 : 0,
      status: body.status || "COLD",
      score: body.score ?? 0,
      notes: body.notes || null,
      in_crm: body.in_crm ? 1 : 0,
      created_at: now,
      updated_at: now,
    };

    const { error } = await db.from("leads").insert(row);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(row, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
