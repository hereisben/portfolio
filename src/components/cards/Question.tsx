"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Question({
  classNames = "",
  q,
  a,
  id = "",
}: {
  classNames?: string;
  id?: string;
  q: string;
  a: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={`${id}`} className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-zb space-x-4 text-left"
      >
        <span className="text-xl font-medium text-white">{q}</span>
        <div className="border border-white/20 rounded-full p-2 text-primary">
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: 6 }}
              animate={{ y: 0 }}
              exit={{ y: 6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="pb-6 text-neutral-500 leading-relaxed font-semibold"
            >
              {a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
