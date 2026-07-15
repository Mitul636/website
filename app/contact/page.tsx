import TicketForm from "@/components/TicketForm";

export default function ContactPage() {
  return (
    <section>
      <div className="wrap" style={{ maxWidth: 560 }}>
        <div className="eyebrow">Support</div>
        <h1 style={{ marginTop: 14, fontSize: "clamp(32px,5vw,48px)" }}>Open a ticket</h1>
        <p style={{ marginTop: 16 }}>
          Submitting here logs your request in TigerHost's ticket database.
          For invite or boost proof, still bring a screenshot into the Discord
          ticket channel — staff verify claims there before provisioning.
        </p>
        <div className="panel" style={{ padding: 28, marginTop: 32 }}>
          <TicketForm />
        </div>
      </div>
    </section>
  );
}
