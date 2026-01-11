import { ArrowRight, Eye } from "lucide-react";
import MainBtn from "../buttons/MainBtn";
import Desc from "../typo/Desc";
import Heading2 from "../typo/Heading2";

export default function HeroContainer() {
  const highlight = "text-lime-400";
  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-2 max-w-2xl">
      <Heading2>Ben Nguyen</Heading2>
      <Desc classNames="text-center">
        I am a Computer Science student focusing on full-stack development, and
        I enjoy building web applications that are{" "}
        <span className="text-primary">clear</span>,{" "}
        <span className="text-primary">usable</span>, and designed for{" "}
        <span className="text-primary">real users</span>.
      </Desc>
      <div className="flex justify-center items-center gap-2 py-8">
        <MainBtn
          href="#contact"
          text="Start a Project"
          icon={<ArrowRight />}
          classNames="shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 bg-primary text-black hover:bg-lime-400 shadow-[0_4px_20px_rgba(217,241,84,0.3)] hover:shadow-[0_4px_30px_rgba(217,241,84,0.5)]"
        />
        <MainBtn
          target="_blank"
          href="/resume.pdf"
          text="View Resume"
          icon={<Eye />}
          classNames="font-semibold border border-2 hover:border-primary border-white/10 hover:bg-white/5 hover:text-amber-100 text-primary backdrop-blur-md"
        />
      </div>
    </div>
  );
}
