import Link from "next/link";
import React from "react";

export default function LogoBtn({
  url,
  icon,
  label,
}: {
  url: string;
  icon: React.ReactNode;
  label?: string;
}) {
  return (
    <Link
      href={url}
      className="p-2 md:p-3 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all relative group"
    >
      {icon}
      <span className="absolute top-12 left-1/2 -translate-x-1/2 bg-[#121212] border border-white/10 text-white text-[10px] px-2 font-medium py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        {label}
      </span>
    </Link>
  );
}
