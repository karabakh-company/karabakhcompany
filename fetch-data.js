// Runs on GitHub Actions every hour. Saves TruckersMP events + news into events.json / news.json
const fs = require("fs");
const VTC = 81836;
const API = "https://api.truckersmp.com/v2/vtc/" + VTC;
const H = { headers: { "User-Agent": "KarabakhCompany-Website/1.0" } };
const abs = (u) => (u && u.startsWith("/") ? "https://truckersmp.com" + u : u || "https://truckersmp.com/vtc/" + VTC);
let failed = false;

async function get(path) {
  const r = await fetch(API + path, H);
  if (!r.ok) throw new Error(path + " -> HTTP " + r.status);
  const j = await r.json();
  if (j.error) throw new Error(path + " -> API error");
  return j.response;
}
(async () => {
  try {
    const ev = await get("/events");
    const list = (Array.isArray(ev) ? ev : ev.events || [])
      .map((e) => ({ id: e.id, name: e.name, start_at: e.start_at, departure: e.departure, arrive: e.arrive, server: e.server && (e.server.name || e.server), url: abs(e.url || "/events/" + e.id) }))
      .filter((e) => e.start_at && new Date(e.start_at.replace(" ", "T") + "Z") > Date.now() - 864e5)
      .sort((a, b) => (a.start_at < b.start_at ? -1 : 1)).slice(0, 30);
    fs.writeFileSync("events.json", JSON.stringify({ events: list }, null, 1));
    console.log("events:", list.length);
  } catch (e) { failed = true; console.error("EVENTS FAILED:", e.message); }
  try {
    const nw = await get("/news");
    const list = (Array.isArray(nw) ? nw : nw.news || nw.posts || [])
      .map((n) => ({ id: n.id, title: n.title, summary: n.content_summary || n.summary || "", published_at: n.published_at, url: "https://truckersmp.com/vtc/" + VTC + "/news/" + n.id }))
      .sort((a, b) => ((a.published_at || "") < (b.published_at || "") ? 1 : -1)).slice(0, 10);
    fs.writeFileSync("news.json", JSON.stringify({ news: list }, null, 1));
    console.log("news:", list.length);
  } catch (e) { failed = true; console.error("NEWS FAILED:", e.message); }
  if (failed) process.exit(1);
})();
