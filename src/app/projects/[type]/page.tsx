import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Heading2 from "@/components/typo/Heading2";
import { PROJECTS_CONFIG } from "@/config/projects";
import { LayoutPanelTop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Project({
  params,
}: {
  params: Promise<{ type: string }> | { type: string };
}) {
  const { type } = await params;
  const data = PROJECTS_CONFIG[type];
  if (!data) return notFound();
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <NavBar />
      <main>
        <div className="container mx-auto px-6 pt-32 relative">
          <div className="mb-16 gap-4">
            <span className="text-primary font-mono mb-2 block tracking-wider uppercase text-xs">
              SELECTED WORKS
            </span>
            <Heading2>
              {data.title} <span className="text-neutral-500">Projects</span>
            </Heading2>
          </div>
          <div className="grid lg:auto-rows-[24rem] grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {data.items.map((p) => (
              <Link
                target="_blank"
                href={p.href}
                key={p.name}
                className="row-span-1 rounded-3xl group hover:shadow-xl transition duration-200 shadow-none p-6 bg-[#121212] border border-white/5 gap-4 flex flex-col hover:border-primary/50 hover:bg-[#1a1a1a] overflow-hidden"
              >
                <div className="h-44 sm:h-52 lg:h-full">
                  <div className="h-full rounded-xl overflow-hidden relative border border-white/5 bg-neutral-900">
                    <Image
                      fill
                      alt={p.alt}
                      src={p.src}
                      className="w-full h-full object-cover opacity-60 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 "
                    />
                  </div>
                </div>
                <div className="group-hover:translate-x-2 transition duration-200 shrink-0 md:line-clamp-3 hover:line-clamp-none">
                  <div className="mb-2">
                    <LayoutPanelTop className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-display font-bold text-neutral-200 mb-1 text-xl">
                    {p.name}
                  </div>
                  <div className="font-sans font-normal text-neutral-400 text-sm">
                    {p.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
