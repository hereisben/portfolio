import { motion, type MotionProps } from "framer-motion";
import { Calendar, Milestone } from "lucide-react";
import CanRunFramer from "../hooks/CanRunFramer";

export default function JourneyCard({
  classNames = "",
  motionProps,
  timeRange = "Unknown",
  label,
  subLabel,
  desc,
}: {
  classNames?: string;
  motionProps?: MotionProps;
  timeRange: string;
  label: string;
  subLabel: string;
  desc: string;
}) {
  const canRunFramer = CanRunFramer();
  return (
    <motion.div
      {...(canRunFramer ? motionProps : {})}
      className={`max-w-sm p-6 rounded-2xl border border-white/5 bg-[#121212] hover:border-primary/30 transition-colors group ${classNames}`}
    >
      <span className="inline-flex items-center gap-2 text-primary text-xs font-mono mb-2 border border-primary/20 px-2 py-1 rounded">
        <Calendar />
        {timeRange}
      </span>
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors font-display">
        {label}
      </h3>
      <div className="flex items-center gap-2 text-sm text-neutral-400 md:justify-start">
        <Milestone />
        {subLabel}
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
