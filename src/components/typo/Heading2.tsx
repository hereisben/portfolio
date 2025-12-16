import React from "react";

export default function Heading2({
  classNames = "",
  children,
}: {
  classNames?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`text-4xl md:text-6xl font-bold text-white mb-6 ${classNames}`}
    >
      {children}
    </h2>
  );
}
