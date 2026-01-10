import React from "react";

export default function MainBtn({
  classNames = "",
  text,
  icon,
  href,
  download = false,
  target = "",
}: {
  classNames?: string;
  text: string;
  icon: React.ReactNode;
  href: string;
  download?: boolean;
  target?: string;
}) {
  return (
    <a
      target={target}
      href={href}
      rel="noopener noreferrer"
      download={download}
    >
      <button
        className={`${classNames} inline-flex items-center justify-center duration-200 h-14 px-8 text-lg font-bold rounded-full transition-all cursor-pointer gap-2 active:scale-95 disabled:opacity-50`}
      >
        {text}
        {icon}
      </button>
    </a>
  );
}
