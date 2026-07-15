const RULES = [
  { t: "No spam", d: "No mention spam, character spam, image spam, or message spam — including loud/obnoxious voice-channel noise." },
  { t: "No inappropriate content", d: "No gore, sexual, or scary content, including in screamer links, profile pictures, nicknames, or statuses." },
  { t: "No harassment", d: "No harassment, bullying, or trolling of any kind, sexual or otherwise. Mild swearing is fine as long as it's not aimed at another member." },
  { t: "No mass mentions", d: "@everyone and @here are reserved for staff. Messages that misuse them are removed and the poster may be expelled." },
  { t: "No hate speech", d: "No racist, sexist, anti-LGBTQ+, or otherwise discriminatory content, tolerated in any form." },
  { t: "No politics or religion", d: "These topics tend to produce controversy even when raised in good faith, so they're off-limits here." },
  { t: "Match the tone of a physical space", d: "This server is treated as an extension of a real building — the same standards of conduct apply." },
];

const VOICE_RULES = [
  "Keep voice channels free of loud or high-pitched noise; reduce background noise where you can.",
  "Moderators may disconnect anyone whose audio quality is disruptive.",
  "Moderators may disconnect, mute, deafen, or move members between voice channels as needed.",
];

export default function RulesPage() {
  return (
    <>
      <section style={{ paddingBottom: 24 }}>
        <div className="wrap">
          <div className="eyebrow">Community</div>
          <h1 style={{ marginTop: 14, fontSize: "clamp(32px,5vw,48px)" }}>Server rules</h1>
          <p style={{ marginTop: 16, maxWidth: 560 }}>
            Warnings scale with severity — a first mute can run 10 minutes to
            24 hours, a second is 3 days, a third is a week, and a fourth is a
            permanent ban. Serious violations can skip straight to a harsher
            penalty. Moderator and admin decisions are final.
          </p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="grid">
            {RULES.map((r) => (
              <div className="card" key={r.t}>
                <div className="name" style={{ fontSize: 19 }}>{r.t}</div>
                <p style={{ fontSize: 14 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <h3>Voice channels</h3>
          <ul style={{ marginTop: 14, color: "var(--muted)", lineHeight: 1.9, paddingLeft: 20 }}>
            {VOICE_RULES.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
