import Link from "next/link";
import React from "react";

export default function MainBtn({
  classNames = "",
  text,
  icon,
}: {
  classNames?: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={"#"}>
      <button
        className={`${classNames} inline-flex items-center justify-center duration-200 h-14 px-8 text-lg font-bold rounded-full transition-all cursor-pointer gap-2 active:scale-95 disabled:opacity-50`}
      >
        {text}
        {icon}
      </button>
    </Link>
  );
}
