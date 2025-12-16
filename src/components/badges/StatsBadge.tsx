export default function StatsBadge({
  label,
  subLabel,
}: {
  label: string;
  subLabel: string;
}) {
  return (
    <div>
      <h4 className="text-4xl font-bold text-white mb-1">{label}</h4>
      <p className="text-xs text-primary uppercase tracking-wider">
        {subLabel}
      </p>
    </div>
  );
}
