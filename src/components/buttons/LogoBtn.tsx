import Link from "next/link";

export default function LogoBtn() {
  return (
    <Link
      href="#"
      className="w-16 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10 hover:scale-105 transition-transform overflow-hidden p-1 shrink-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 80"
        className="w-full h-full"
      >
        <text
          x="50%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="36"
          fontWeight="bold"
          fill="#ffffff"
        >
          &lt;/BEN&gt;
        </text>
      </svg>
    </Link>
  );
}
