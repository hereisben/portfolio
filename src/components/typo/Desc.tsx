import React from "react";

export default function Desc({
  classNames = "",
  children,
}: {
  classNames?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`${classNames} text-xl text-neutral-400 leading-relaxed`}>
      {children}
    </p>
  );
}
