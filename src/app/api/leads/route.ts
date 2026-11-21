import { NextResponse } from "next/server";
import { getDb, makeId } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const db = getDb();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");

    let leads;
    if (userId) {
      leads = db
        .prepare("SELECT * FROM leads WHERE user_id = ? ORDER BY created_at DESC")
        .all(userId);
    } else {
      leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    }

    return NextResponse.json(leads);
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
      `INSERT INTO leads (id, user_id, name, category, city, region, phone, whatsapp, email, website_url, has_website, site_down, no_ssl, no_contact, status, score, notes, in_crm, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      id,
      body.user_id || "default",
      body.name || "",
      body.category || "",
      body.city || "",
      body.region || "",
      body.phone || null,
      body.whatsapp || null,
      body.email || null,
      body.website_url || null,
      body.has_website ? 1 : 0,
      body.site_down ? 1 : 0,
      body.no_ssl ? 1 : 0,
      body.no_contact ? 1 : 0,
      body.status || "COLD",
      body.score || 0,
      body.notes || null,
      body.in_crm ? 1 : 0,
      now,
      now
    );

    return NextResponse.json({ id, ...body }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
