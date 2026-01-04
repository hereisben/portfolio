import JourneyCardContainer from "@/components/containers/JourneyCardContainer";
import Desc from "@/components/typo/Desc";
import Heading2 from "@/components/typo/Heading2";

export default function Journey() {
  return (
    <section className="w-full">
      <div className="bg-black px-8 py-12 flex flex-col gap-16">
        <div className="flex flex-col mx-auto items-center">
          <Heading2>Journey</Heading2>
          <Desc>My professional timeline and milestones.</Desc>
        </div>
        <JourneyCardContainer />
      </div>
    </section>
  );
}
