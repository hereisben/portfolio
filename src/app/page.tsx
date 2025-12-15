import NavBar from "@/components/navigation/NavBar";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
