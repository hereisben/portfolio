import FocusContainer from "@/components/containers/FocusContainer";
import Desc from "@/components/typo/Desc";
import Heading2 from "@/components/typo/Heading2";

export default function Focus() {
  return (
    <section className="w-full">
      <div className="bg-black px-8 py-32 flex flex-col gap-16">
        <div className="flex items-center flex-col mx-auto">
          <Heading2>What I Build</Heading2>
          <Desc>I build web products with clear logic and simple UX.</Desc>
        </div>
        <FocusContainer />
      </div>
    </section>
  );
}
