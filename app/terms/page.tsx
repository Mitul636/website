export default function TermsPage() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="eyebrow">Legal</div>
        <h1 style={{ marginTop: 14, fontSize: "clamp(32px,5vw,48px)" }}>Terms &amp; Acceptable Use</h1>

        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <h3>Chargebacks &amp; payment disputes</h3>
            <p style={{ marginTop: 10 }}>
              Filing a chargeback or dispute without contacting support first
              results in immediate service suspension and account blacklisting.
              Reach out to support to resolve billing concerns before disputing
              a charge.
            </p>
          </div>
          <div>
            <h3>Acceptable use policy</h3>
            <p style={{ marginTop: 10 }}>The following are strictly prohibited on the platform:</p>
            <ul style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Adult or pornographic content</li>
              <li>Phishing, scamming, or spreading malware</li>
              <li>DDoS tools, booters, or stress-testing services</li>
              <li>Hacking tools or scripts that compromise server integrity</li>
            </ul>
          </div>
          <div>
            <h3>Support policy</h3>
            <p style={{ marginTop: 10 }}>
              Support is available via Discord and the ticket system, with a
              typical response time of 1–6 hours during business hours.
              Emergency support is available for critical service issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
