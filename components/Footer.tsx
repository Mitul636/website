import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="brand" style={{ fontSize: 18, marginBottom: 8 }}>
            <span className="mark">◆</span> TigerHost
          </div>
          <p style={{ maxWidth: 320 }}>
            Community-run VPS and Minecraft hosting. Plans, boosts, and support
            all live in Discord.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/plans">Plans</Link>
          <Link href="/about">About</Link>
          <Link href="/rules">Server rules</Link>
          <Link href="/policy">Privacy policy</Link>
          <Link href="/terms">Terms &amp; AUP</Link>
          <Link href="/contact">Open a ticket</Link>
        </div>
      </div>
    </footer>
  );
}
