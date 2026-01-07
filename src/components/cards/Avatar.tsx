"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: -20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="group relative mx-auto w-64 md:w-80 md:h-112.5 h-80 bg-[#1a1a1a] border border-white/10 overflow-hidden shadow-2xl  arch-mask"
    >
      <div className="pointer-events-none absolute inset-0 m-2 border border-white/10 arch-mask" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/60" />
      <Image
        src={"/thumb.png"}
        fill
        alt="Ben Nguyen"
        priority
        className="object-cover opacity-90 grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
      />
    </motion.div>
  );
}
