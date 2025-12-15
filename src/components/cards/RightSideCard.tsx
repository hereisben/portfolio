import React from "react";

export default function RightSideCard({
  classNames,
  icon,
  subLabel,
  label,
}: {
  classNames?: string;
  icon: React.ReactNode;
  subLabel: string;
  label: string;
}) {
  return (
    <div
      className={`${classNames} absolute lg:flex items-center gap-3 p-4 rounded-2xl bg-[#121212]/80 backdrop-blur-md border border-white/5 border-r-primary border-r-2 shadow-2xl`}
    >
      <div className="text-right">
        <p className="text-xs text-neutral-400">{subLabel}</p>
        <p className="text-sm font-bold text-white">{label}</p>
      </div>
      {icon}
    </div>
  );
}
