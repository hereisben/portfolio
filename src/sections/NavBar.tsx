import HireBtn from "@/components/buttons/HireBtn";
import LogoBtn from "@/components/buttons/LogoBtn";
import NavIconContainer from "@/components/NavIconContainer";

export default function ComponentName() {
  return (
    <nav className="fixed top-6 left-0 right-0 flex justify-center items-center p-4">
      <div className="flex items-center gap-2 md:gap-3 p-2 rounded-full border border-white/10 bg-[#121212]/80 backdrop-blur-xl shadow-2xl overflow-x-auto md:overflow-visible max-w-[95vw]">
        <LogoBtn />
        {/*  */}
        <div className="md:block w-px h-6 bg-white/10 mx-2"></div>
        {/*  */}
        <NavIconContainer />
        {/*  */}
        <div className="md:block w-px h-6 bg-white/10 mx-2"></div>
        <HireBtn />
      </div>
    </nav>
  );
}
