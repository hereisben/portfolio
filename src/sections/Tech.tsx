"use client";

import Desc from "@/components/typo/Desc";
import Heading2 from "@/components/typo/Heading2";
import { useEffect, useRef, useState } from "react";

type TechItem = {
  id: string;
  label: string;
  size: "xl" | "lg" | "md" | "sm";
  tone?: "lime" | "green" | "purple" | "teal" | "blue";
  x: number;
  y: number;
};

type Bubble = {
  id: string;
  label: string;
  size: TechItem["size"];
  tone?: TechItem["tone"];
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function sizeToVw(size: TechItem["size"]) {
  if (size === "xl") return 20;
  if (size === "lg") return 17;
  if (size === "md") return 16;
  return 14;
}

function vwToPx(vw: number) {
  if (typeof window === "undefined") return vw * 10;
  return (vw / 100) * window.innerWidth;
}

function bubbleClass(tone: NonNullable<TechItem["tone"]>) {
  const base =
    "absolute grid text-xs md:text-xl place-items-center rounded-full text-center transition-[transform,box-shadow] duration-300 will-change-transform text-neutral-800 ";

  if (tone === "lime")
    return (
      base +
      " bg-primary/90 shadow-[0_0_80px_rgba(217,241,84,0.4)] hover:shadow-[0_0_80px_rgba(217,241,84,0.6)]"
    );

  if (tone === "green")
    return (
      base +
      " bg-green-500/90 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] shadow-[0_0_50px_rgba(34,197,94,0.3)]"
    );

  if (tone === "purple")
    return (
      base +
      " bg-purple-400/90 shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
    );

  if (tone === "teal")
    return (
      base +
      " bg-teal-400/90 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
    );

  return (
    base +
    " bg-blue-500/90 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
  );
}

function hash01(n: number) {
  const x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}

export default function Tech() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const rafRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const seed: TechItem[] = [
    { id: "react", label: "React", size: "lg", tone: "lime", x: 18, y: 45 },
    { id: "node", label: "Node.js", size: "lg", tone: "blue", x: 22, y: 72 },
    { id: "ts", label: "TypeScript", size: "xl", tone: "teal", x: 83, y: 22 },

    { id: "mongo", label: "MongoDB", size: "md", tone: "lime", x: 44, y: 52 },
    { id: "php", label: "PHP", size: "md", tone: "blue", x: 45, y: 66 },

    { id: "next", label: "Next.js", size: "sm", tone: "blue", x: 41, y: 18 },
    { id: "mysql", label: "MySQL", size: "sm", tone: "green", x: 72, y: 20 },
    {
      id: "tailwind",
      label: "Tailwind",
      size: "sm",
      tone: "lime",
      x: 77,
      y: 32,
    },

    { id: "framer", label: "Framer", size: "md", tone: "purple", x: 78, y: 74 },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    const init: Bubble[] = seed.map((t, i) => {
      const diameterPx = vwToPx(sizeToVw(t.size));
      const r = diameterPx / 2;

      const s = i * 999 + t.x * 10 + t.y * 20;
      const rvx = hash01(s) - 0.5;
      const rvy = hash01(s + 123.456) - 0.5;

      return {
        id: t.id,
        label: t.label,
        size: t.size,
        tone: t.tone,
        r,
        x: (t.x / 100) * W,
        y: (t.y / 100) * H,
        vx: rvx * 0.8,
        vy: rvy * 0.8,
      };
    });

    bubblesRef.current = init;
    setBubbles([...init]);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      const pad = 8;

      for (const b of bubblesRef.current) {
        const diameterPx = vwToPx(sizeToVw(b.size));
        b.r = diameterPx / 2;

        b.x = Math.max(b.r + pad, Math.min(W - b.r - pad, b.x));
        b.y = Math.max(b.r + pad, Math.min(H - b.r - pad, b.y));
      }

      setBubbles([...bubblesRef.current]);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const friction = 0.985;
    const maxSpeed = 10;
    const wanderStrength = 0.45;

    const step = () => {
      const rect = el.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;

      timeRef.current += 0.016;

      for (const b of bubblesRef.current) {
        const seed = timeRef.current * 10 + b.x * 0.01 + b.y * 0.01;
        const n1 = hash01(seed);
        const n2 = hash01(seed + 100);

        const angle = n1 * Math.PI * 2;
        const force = (n2 - 0.5) * wanderStrength;

        b.vx += Math.cos(angle) * force;
        b.vy += Math.sin(angle) * force;

        // friction
        b.vx *= friction;
        b.vy *= friction;

        // clamp speed
        const sp = Math.hypot(b.vx, b.vy);
        if (sp > maxSpeed) {
          b.vx = (b.vx / sp) * maxSpeed;
          b.vy = (b.vy / sp) * maxSpeed;
        }

        // move
        b.x += b.vx;
        b.y += b.vy;

        // bounce with size
        const pad = 8;
        if (b.x < b.r + pad) {
          b.x = b.r + pad;
          b.vx *= -0.9;
        }
        if (b.x > W - b.r - pad) {
          b.x = W - b.r - pad;
          b.vx *= -0.9;
        }
        if (b.y < b.r + pad) {
          b.y = b.r + pad;
          b.vy *= -0.9;
        }
        if (b.y > H - b.r - pad) {
          b.y = H - b.r - pad;
          b.vy *= -0.9;
        }
      }

      setBubbles([...bubblesRef.current]);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto">
        <div className="flex flex-col mx-auto">
          <Heading2>Tech I Build With</Heading2>
          <Desc>Tools I use often in real projects.</Desc>
        </div>

        <div
          ref={containerRef}
          className="mt-12 relative h-[50vh] w-full rounded-3xl"
        >
          <div className="pointer-events-none absolute left-0 top-10 h-px w-full" />

          {bubbles.map((b) => {
            const d = b.r * 2;

            return (
              <div
                key={b.id}
                className={bubbleClass(
                  (b.tone ?? "gray") as NonNullable<TechItem["tone"]>
                )}
                style={{
                  width: d,
                  height: d,
                  transform: `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`,
                }}
              >
                <span className="select-none font-semibold">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
