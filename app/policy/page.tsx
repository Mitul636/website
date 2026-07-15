export default function PolicyPage() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="eyebrow">Legal</div>
        <h1 style={{ marginTop: 14, fontSize: "clamp(32px,5vw,48px)" }}>Privacy Policy</h1>
        <p style={{ marginTop: 10 }}>Last updated July 11, 2026</p>

        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <h3>1. Information we collect</h3>
            <p style={{ marginTop: 10 }}>
              Discord ID, username, and avatar; service, billing, and support
              information; and technical data required to operate our services.
            </p>
          </div>
          <div>
            <h3>2. How we use your data</h3>
            <p style={{ marginTop: 10 }}>
              To deliver and manage hosting services, provide customer support,
              improve security and reliability, and prevent fraud and abuse.
            </p>
          </div>
          <div>
            <h3>3. Data protection</h3>
            <p style={{ marginTop: 10 }}>
              Your data is protected with reasonable security measures, and
              access is limited to authorized TigerHost staff.
            </p>
          </div>
          <div>
            <h3>4. Third-party services</h3>
            <p style={{ marginTop: 10 }}>
              Payments, hosting infrastructure, or backups may be provided by
              trusted third parties operating under their own privacy policies.
            </p>
          </div>
          <div>
            <h3>5. Your rights</h3>
            <p style={{ marginTop: 10 }}>
              You may request to view the data we store about you, correct
              inaccurate information, or request deletion of eligible data.
            </p>
          </div>
          <div>
            <h3>6. Policy changes</h3>
            <p style={{ marginTop: 10 }}>
              TigerHost may update this policy at any time. Continued use of
              our services means you accept the latest version.
            </p>
          </div>
          <div>
            <h3>7. Contact</h3>
            <p style={{ marginTop: 10 }}>
              For privacy-related questions or requests, open a support
              ticket in the TigerHost Discord server.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
