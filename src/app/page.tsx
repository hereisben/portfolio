import NavBar from "@/components/navigation/NavBar";
import Focus from "@/sections/Focus";
import Hero from "@/sections/Hero";
import Intent from "@/sections/Intent";
import Journey from "@/sections/Journey";
import QnA from "@/sections/QnA";
import Tech from "@/sections/Tech";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main>
        <Hero />
        <Intent />
        <Focus />
        <Journey />
        <Tech />
        <QnA />
      </main>
    </div>
  );
}
