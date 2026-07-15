export type Plan = {
  id: number;
  category: string;
  name: string;
  requirement: string | null;
  ram: string | null;
  cpu: string | null;
  storage: string | null;
  price_usd: number | null;
  price_inr: number | null;
  region: string | null;
};

export default function PlanCard({ plan }: { plan: Plan }) {
  const priceText =
    plan.price_usd != null
      ? `$${plan.price_usd.toFixed(2)}/mo${plan.price_inr ? ` · ₹${plan.price_inr}/mo` : ""}`
      : "Free — earned reward";

  return (
    <div className="card">
      {plan.requirement && <div className="req">{plan.requirement}</div>}
      <div className="name">{plan.name}</div>
      <div className="specs">
        {plan.ram && (
          <div className="row"><span>RAM</span><span>{plan.ram}</span></div>
        )}
        {plan.cpu && (
          <div className="row"><span>CPU</span><span>{plan.cpu}</span></div>
        )}
        {plan.storage && (
          <div className="row"><span>Storage</span><span>{plan.storage}</span></div>
        )}
      </div>
      <div className="price">{priceText}</div>
      {plan.region && <div className="region">{plan.region}</div>}
    </div>
  );
}
