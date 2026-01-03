import Image from "next/image";

export default function FocusCard({
  imgUrl = "",
  imgAlt = "",
  label,
  subLabel,
  xPart,
}: {
  imgUrl: string;
  imgAlt?: string;
  label: string;
  subLabel: string;
  xPart: string;
}) {
  return (
    <div className="group relative border border-white/10 bg-[#121212] overflow-hidden rounded-3xl p-4 h-full group-hover:shadow-[0_0_0_1px_rgba(132,204,22,0.4)]">
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 "></div>
      <div className="relative h-full flex flex-col">
        <div className="relative h-48 mb-6 overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]">
          <Image
            fill
            src={`${imgUrl}`}
            alt={`${imgAlt}`}
            className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
          />
        </div>
        <div className="px-2">
          <h3 className="text-2xl font-bold text-white mb-3">{label}</h3>
          <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
            {subLabel}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {xPart}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-300">
            <span className="text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
