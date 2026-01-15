import Avatar from "@/components/cards/Avatar";
import LeftSideCard from "@/components/cards/LeftSideCard";
import RightSideCard from "@/components/cards/RightSideCard";
import TagCard from "@/components/cards/TagCard";
import HeroContainer from "@/components/containers/HeroContainer";
import { Code, Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pb-8 px-4 md:pt-40 overflow-hidden bg-black "
    >
      <TagCard label="Turning Ideas into Simple Full-Stack Products" />
      <div className="container mx-auto px-6 relative flex flex-col items-center">
        <div className="relative flex justify-center items-center py-10 md:py-20">
          <h1 className="absolute text-6xl md:text-[10rem] font-bold text-white/5 tracking-tighter select-none whitespace-nowrap z-0">
            FULL STACK ENGINEER
          </h1>
          <Avatar />
        </div>
      </div>
      <div className="hidden lg:block">
        <LeftSideCard
          classNames="top-1/3 left-4"
          icon={<Code className="text-primary" />}
          subLabel="Junior Software Engineer"
          label="Open to Opportunities"
        />
      </div>
      <div className="hidden lg:block">
        <RightSideCard
          classNames="right-4 bottom-1/3"
          icon={<Cpu className="text-primary" />}
          subLabel="Stack"
          label="React · Node.js · MongoDB"
        />
      </div>
      <HeroContainer />
    </section>
  );
}
