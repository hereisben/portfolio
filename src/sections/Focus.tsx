"use client";

import FocusContainer from "@/components/containers/FocusContainer";
import useCanRunFramer from "@/components/hooks/useCanRunFramer";
import Desc from "@/components/typo/Desc";
import Heading2 from "@/components/typo/Heading2";
import { motion } from "framer-motion";

export default function Focus() {
  const canRunFramer = useCanRunFramer();
  return (
    <motion.section
      id="focus"
      initial={canRunFramer ? { opacity: 0, y: 18 } : false}
      whileInView={canRunFramer ? { opacity: 1, y: 0 } : undefined}
      transition={
        canRunFramer ? { duration: 0.55, ease: "easeOut" } : undefined
      }
      viewport={canRunFramer ? { amount: 0.2 } : undefined}
      className="w-full"
    >
      <div className="bg-black px-8 py-8 md:py-32 flex flex-col gap-16">
        <div className="flex items-center flex-col mx-auto">
          <Heading2>What I Build</Heading2>
          <Desc>I build web products with clear logic and simple UX.</Desc>
        </div>
        <FocusContainer />
      </div>
    </motion.section>
  );
}
