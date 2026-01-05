import React from "react";

export default function KeyBadge({
  classNames = "",
  icon,
  iconClassNames = "",
  label,
  subLabel,
}: {
  classNames?: string;
  icon?: React.ReactNode;
  iconClassNames?: string;
  label: string;
  subLabel: string;
}) {
  return (
    <div
      className={`${classNames} p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-colors`}
    >
      <div className={`p-3 rounded-lg ${iconClassNames}`}>{icon}</div>
      <div>
        <h5 className="font-bold text-white">{label}</h5>
        <p className="text-xs text-gray-400">{subLabel}</p>
      </div>
    </div>
  );
}
