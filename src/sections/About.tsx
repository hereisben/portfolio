"use client";

import AboutCard from "@/components/cards/AboutCard";
import AboutContainer from "@/components/containers/AboutContainer";
import CanRunFramer from "@/components/hooks/CanRunFramer";
import { motion } from "framer-motion";

export default function About() {
  const canRunFramer = CanRunFramer();
  return (
    <motion.section
      id="about"
      initial={canRunFramer ? { opacity: 0, x: 24 } : false}
      whileInView={canRunFramer ? { opacity: 1, x: 0 } : undefined}
      transition={
        canRunFramer ? { duration: 0.55, ease: "easeOut" } : undefined
      }
      viewport={canRunFramer ? { amount: 0.2 } : undefined}
      className="relative pt-16 pb-16 md:pt-20 overflow-hidden bg-background selection:bg-yellow-400 selection:text-black px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <AboutContainer />
      <div className="relative isolate">
        <AboutCard />
        <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10"></div>
      </div>
    </motion.section>
  );
}
