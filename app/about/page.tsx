import Stripes from "@/components/Stripes";

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1 style={{ marginTop: 14, fontSize: "clamp(36px,5vw,56px)" }}>Power. Speed. Reliability.</h1>
          <p style={{ marginTop: 16, maxWidth: 600, fontSize: 16 }}>
            TigerHost is a Discord-based hosting community offering VPS, Minecraft,
            and cloud hosting at community pricing. Everything — ordering, support,
            and delivery — happens through the server.
          </p>
        </div>
      </section>

      <Stripes />

      <section>
        <div className="wrap">
          <div className="grid">
            {[
              { t: "High-speed VPS & hosting", d: "Xeon and Ryzen hardware behind every plan, boosted or paid." },
              { t: "Multiple locations", d: "Singapore and India nodes for low latency, more regions on paid tiers." },
              { t: "NVMe / SSD storage", d: "No spinning disks — every plan runs on solid-state storage." },
              { t: "Secure & stable", d: "1 Tbps DDoS protection on cloud VPS plans." },
              { t: "Active support team", d: "Support runs through Discord tickets, typically answered in 1–6 hours." },
              { t: "Budget-friendly pricing", d: "Billed in INR, USD, or BDT — whatever's easiest for you." },
            ].map((f) => (
              <div className="card" key={f.t}>
                <div className="name" style={{ fontSize: 20 }}>{f.t}</div>
                <p style={{ fontSize: 14 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
