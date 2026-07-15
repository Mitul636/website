"use client";

import { useState } from "react";

const CATEGORIES = [
  "Server Boost VPS",
  "Invite VPS",
  "Free Minecraft",
  "Premium Minecraft",
  "Cloud VPS",
  "Paid setup work",
  "Other",
];

export default function TicketForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = {
      discord_username: form.get("discord_username"),
      category: form.get("category"),
      plan_name: form.get("plan_name"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Could not submit ticket");
      }
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong");
    }
  }

  if (status === "sent") {
    return (
      <div className="notice">
        Ticket logged. Head to the #tickets channel in Discord and reference
        your username above — staff will pick it up from there.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="discord_username">Discord username</label>
        <input id="discord_username" name="discord_username" required placeholder="e.g. ember.exe" />
      </div>
      <div className="field">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" required defaultValue="">
          <option value="" disabled>Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="plan_name">Plan (if known)</label>
        <input id="plan_name" name="plan_name" placeholder="e.g. Cloud VPS 30" />
      </div>
      <div className="field">
        <label htmlFor="message">What do you need?</label>
        <textarea id="message" name="message" placeholder="Proof of invites/boost, custom spec request, billing question…" />
      </div>
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit ticket"}
      </button>
      {status === "error" && (
        <p style={{ color: "#e08a8a", marginTop: 12 }}>{errorMsg}</p>
      )}
    </form>
  );
}
