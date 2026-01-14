"use client";

import ContactBtn from "@/components/buttons/ContactBtn";
import LogoBtn from "@/components/buttons/LogoBtn";
import NavIconContainer from "@/components/containers/NavIconContainer";
import { useEffect, useState } from "react";

export default function ComponentName() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setlastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setlastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav className="fixed z-10 top-6 left-0 right-0 flex justify-center items-center p-4">
      <div
        className={`flex items-center gap-2 md:gap-3 p-2 rounded-full border border-white/10 bg-[#121212]/80 backdrop-blur-xl shadow-2xl overflow-x-auto md:overflow-visible max-w-[95vw] transition-transform duration-300 ease-out ${
          hidden ? "-translate-y-21 opacity-50" : "translate-y-0 opacity-100"
        }`}
      >
        <LogoBtn />
        {/*  */}
        <div className="md:block w-px h-6 bg-white/10 mx-2"></div>
        {/*  */}
        <NavIconContainer />
        {/*  */}
        <div className="md:block w-px h-6 bg-white/10 mx-2"></div>
        <ContactBtn />
      </div>
    </nav>
  );
}
