"use client";

import IntentCard from "@/components/cards/IntentCard";
import IntentContainer from "@/components/containers/IntentContainer";
import { motion } from "framer-motion";

export default function Intent() {
  return (
    <motion.section
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="relative pt-16 pb-16 md:pt-20 overflow-hidden bg-background selection:bg-yellow-400 selection:text-black px-8 grid lg:grid-cols-2 gap-16 items-center"
    >
      <IntentContainer />
      <div className="relative isolate">
        <IntentCard />
        <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10"></div>
      </div>
    </motion.section>
  );
}
