import Link from "next/link";
import Stripes from "@/components/Stripes";

const FAMILIES = [
  {
    tag: "01 — Server Boost VPS",
    title: "Boost the server, take a VPS",
    body: "Boost TigerHost's Discord and the highest tier unlocks a real VPS — Xeon cores, NVMe storage, private IPv4. Stays live as long as the boost does.",
    href: "/plans#boost",
  },
  {
    tag: "02 — Invite & Minecraft",
    title: "Invite friends, earn hosting",
    body: "No boost? Bring people in instead. Invite tiers unlock free VPS and Minecraft allocations, from a starter 1 GB box up to a 32 GB SMP server.",
    href: "/plans#invite",
  },
  {
    tag: "03 — Premium Minecraft",
    title: "Skip the grind, subscribe",
    body: "Fixed monthly plans for SMPs and modded networks that can't wait on invites — Singapore and India nodes from under a dollar a month.",
    href: "/plans#minecraft-paid",
  },
  {
    tag: "04 — Cloud VPS",
    title: "General-purpose cloud compute",
    body: "Unmetered bandwidth, 1 Tbps DDoS protection, dedicated IPv4. For bots, panels, and anything that isn't a game server.",
    href: "/plans#cloud",
  },
];

export default function Home() {
  return (
    <>
      <section style={{ paddingTop: 72, paddingBottom: 56 }}>
        <div className="wrap">
          <div className="eyebrow">Discord-native hosting · India · Singapore · Bangladesh</div>
          <h1 style={{ marginTop: 18 }}>
            Hosting you<br />earn, or hosting<br />you pay for.
          </h1>
          <p style={{ maxWidth: 520, marginTop: 24, fontSize: 17 }}>
            TigerHost runs entirely out of Discord: boost or invite your way to a
            free VPS, or subscribe to a fixed plan the same day. Every box runs on
            Xeon and Ryzen hardware with NVMe storage.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
            <Link className="btn" href="/plans">See all plans</Link>
            <Link className="btn ghost" href="/contact">Open a ticket</Link>
          </div>
        </div>
      </section>

      <Stripes left="Enterprise Infra" right="Intel Xeon @ 3.90GHz · NVMe · DDoS Shielded" />

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Four ways in</h2>
            <p style={{ maxWidth: 340 }}>Pick the lane that matches what you have: community influence, patience, or a card.</p>
          </div>
          <div className="grid">
            {FAMILIES.map((f) => (
              <Link key={f.href} href={f.href} className="card" style={{ textDecoration: "none" }}>
                <div className="req">{f.tag}</div>
                <div className="name" style={{ fontSize: 22 }}>{f.title}</div>
                <p style={{ fontSize: 14 }}>{f.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Stripes left="Boost Rules" right="One reward per user · 32GB RAM free cap" />

      <section className="tight">
        <div className="wrap">
          <div className="panel" style={{ padding: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div>
              <h3>Ready to claim a plan?</h3>
              <p style={{ marginTop: 8 }}>Open a ticket with your invite or boost proof and staff will provision it.</p>
            </div>
            <Link className="btn" href="/contact">Open a ticket</Link>
          </div>
        </div>
      </section>
    </>
  );
}
