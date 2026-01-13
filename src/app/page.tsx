import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Contact from "@/sections/Contact";
import Focus from "@/sections/Focus";
import Hero from "@/sections/Hero";
import Intent from "@/sections/Intent";
import Journey from "@/sections/Journey";
import QnA from "@/sections/QnA";
import Tech from "@/sections/Tech";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-hidden selection:bg-yellow-400 selection:text-black">
      <NavBar />
      <main>
        <Hero />
        <Intent />
        <Focus />
        <Journey />
        <Tech />
        <QnA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
