import Link from "next/link";
import React from "react";

export default function FooterIcon({
  icon,
  href,
}: {
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="p-3 bg-[#121212] rounded-full hover:bg-primary hover:text-black transition-all transform hover:scale-110 border border-white/5 cursor-pointer text-white"
      href={href}
      target="_blank"
    >
      {icon}
    </Link>
  );
}
