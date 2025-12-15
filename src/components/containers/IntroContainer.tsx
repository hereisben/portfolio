import { ArrowRight, Download } from "lucide-react";
import MainBtn from "../buttons/MainBtn";
import Desc from "../typo/Desc";
import Heading2 from "../typo/Heading2";

export default function IntroContainer() {
  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-2 max-w-2xl">
      <Heading2 text="Ben Nguyen" />
      <Desc
        text="I am a Computer Science student focusing on full-stack development, and I enjoy building web applications that are clear, usable, and designed for real users."
        classNames="text-center"
      />
      <div className="flex justify-center items-center gap-2">
        <MainBtn
          text="Start a Project"
          icon={<ArrowRight />}
          classNames="shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 bg-primary text-black hover:bg-lime-400 shadow-[0_4px_20px_rgba(217,241,84,0.3)] hover:shadow-[0_4px_30px_rgba(217,241,84,0.5)]"
        />
        <MainBtn
          text="Download Resume"
          icon={<Download />}
          classNames="font-semibold border hover:border-blue-200 border-white/10 hover:bg-white/5 hover:text-amber-100 text-primary backdrop-blur-md"
        />
      </div>
    </div>
  );
}
