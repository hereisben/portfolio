"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, TrendingUp } from "lucide-react";
import KeyBadge from "../badges/KeyBadge";

export default function AboutCard() {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-[#121212] border border-white/10 p-8 rounded-3xl relative shadow-2xl relative z-0"
    >
      <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-4">
        <KeyBadge
          classNames="bg-blue-500/10"
          icon={<Target />}
          iconClassNames="bg-blue-500/10 text-blue-400"
          label="Clear Expectations"
          subLabel="I work best when goals and priorities are clear"
        />
        <KeyBadge
          classNames="bg-purple-500/10"
          icon={<TrendingUp />}
          iconClassNames="bg-purple-500/10 text-purple-400"
          label="Steady Progress"
          subLabel="I prefer consistent improvement over rushing"
        />
        <KeyBadge
          classNames="bg-primary/10"
          icon={<CheckCircle />}
          iconClassNames="bg-primary/20 text-primary"
          label="Ownership Mindset"
          subLabel="I take responsibility for what I build"
        />
      </div>
    </motion.div>
  );
}
