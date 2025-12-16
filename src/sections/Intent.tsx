import IntentCard from "@/components/cards/IntentCard";
import IntentContainer from "@/components/containers/IntentContainer";

export default function Intent() {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 overflow-hidden bg-background selection:bg-yellow-400 selection:text-black px-8 grid lg:grid-cols-2 gap-16 items-center">
      <IntentContainer />
      <div className="relative isolate">
        <IntentCard />
        <div className="absolute inset-0 bg-primary/20 blur-[80px] -z-10"></div>
      </div>
    </section>
  );
}
