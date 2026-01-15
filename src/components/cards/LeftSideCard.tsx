import React from "react";

export default function LeftSideCard({
  classNames = "",
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
      className={`${classNames} lg:absolute lg:flex items-center gap-3 p-4 rounded-2xl bg-[#121212]/80 backdrop-blur-md border border-white/5 border-l-primary border-l-2 shadow-2xl`}
    >
      {icon}
      <div className="">
        <p className="text-xs text-neutral-400">{subLabel}</p>
        <p className="text-sm font-bold text-white">{label}</p>
      </div>
    </div>
  );
}
