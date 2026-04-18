import { NextResponse } from "next/server";

let cachedToken: string | null = null;
let tokenExpiry = 0;

export async function POST() {
  const now = Date.now();
  if (cachedToken && now < tokenExpiry) {
    return NextResponse.json({ access_token: cachedToken });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Spotify credentials not configured" },
      { status: 500 }
    );
  }

  const creds = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${creds}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to obtain Spotify token" },
      { status: res.status }
    );
  }

  const data = await res.json();
  cachedToken = data.access_token;
  tokenExpiry = now + (data.expires_in - 60) * 1000;

  return NextResponse.json({ access_token: data.access_token });
}
