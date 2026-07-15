export default function Stripes({ left, right }: { left?: string; right?: string }) {
  return (
    <div className="wrap">
      {(left || right) && (
        <div className="stripe-label">
          <span>{left}</span>
          <span>{right}</span>
        </div>
      )}
      <div className="stripes">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}
