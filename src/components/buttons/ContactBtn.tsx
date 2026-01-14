import Link from "next/link";

export default function ContactBtn() {
  return (
    <Link
      href={"/#contact"}
      className="px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs font-medium text-white hover:bg-white/10 transition-colors shrink-0 whitespace-nowrap"
    >
      Contact Me
    </Link>
  );
}
