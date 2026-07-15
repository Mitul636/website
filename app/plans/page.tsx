import { getDb } from "@/lib/db";
import PlanCard, { Plan } from "@/components/PlanCard";
import Stripes from "@/components/Stripes";

export const dynamic = "force-dynamic";

const SECTIONS: { id: string; category: string; title: string; note: string }[] = [
  { id: "boost", category: "boost", title: "Server Boost VPS", note: "Boost must stay active — removing it can suspend the box. One boost reward per user, capped at 32 GB free." },
  { id: "invite", category: "invite_vps", title: "Invite-to-earn VPS", note: "Bring people into the Discord to climb the tiers. Proof is checked at ticket time." },
  { id: "minecraft-free", category: "minecraft_free", title: "Free Minecraft (invite / boost)", note: "Max disk 50 GB, max 300% CPU on the free tier. You handle your own backups." },
  { id: "minecraft-paid", category: "minecraft_paid", title: "Premium Minecraft", note: "Plans under $6.99 are hosted in Singapore & India; $6.99 and up can deploy anywhere available." },
  { id: "cloud", category: "cloud_vps", title: "Cloud VPS", note: "1 Gbps unmetered network, 1 Tbps DDoS protection, dedicated IPv4 included." },
];

export default async function PlansPage() {
  const db = getDb();
  const all = db.prepare("SELECT * FROM plans ORDER BY category, sort_order ASC").all() as Plan[];

  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">Live pricing</div>
          <h1 style={{ marginTop: 14, fontSize: "clamp(36px,5vw,56px)" }}>All plans</h1>
          <p style={{ marginTop: 16, maxWidth: 560 }}>
            Everything below is pulled straight from TigerHost's plan database.
            Earned tiers (boost, invite) are provisioned after a ticket confirms proof;
            paid tiers are provisioned on payment.
          </p>
        </div>
      </section>

      {SECTIONS.map((section, i) => {
        const rows = all.filter((p) => p.category === section.category);
        if (rows.length === 0) return null;
        return (
          <div key={section.id} id={section.id}>
            <Stripes left={section.title} right={`${rows.length} tiers`} />
            <section className="tight">
              <div className="wrap">
                <div className="section-head">
                  <h2 style={{ fontSize: 30 }}>{section.title}</h2>
                  <p style={{ maxWidth: 380 }}>{section.note}</p>
                </div>
                <div className="grid">
                  {rows.map((p) => (
                    <PlanCard key={p.id} plan={p} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
}
