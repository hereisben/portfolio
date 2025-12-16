import NavBar from "@/components/navigation/NavBar";
import Hero from "@/sections/Hero";
import Intent from "@/sections/Intent";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main>
        <Hero />
        <Intent />
      </main>
    </div>
  );
}
