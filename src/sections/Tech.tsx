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
  if (size === "xl") return 18;
  if (size === "lg") return 15;
  if (size === "md") return 12;
  return 10;
}

function vwToPx(vw: number) {
  if (typeof window === "undefined") return vw * 10;
  return (vw / 100) * window.innerWidth;
}

function bubbleClass(tone: NonNullable<TechItem["tone"]>) {
  const base =
    "absolute grid text-[6px] min-[376px]:text-lg lg:text-xl place-items-center rounded-full text-center transition-[transform,box-shadow] duration-300 [@media(hover:none)]:transition-none will-change-transform text-neutral-800 overflow-hidden [@media(hover:none)]:shadow-none ";

  if (tone === "lime")
    return (
      base +
      ` bg-primary/90 shadow-[0_0_80px_rgba(217,241,84,0.4)] hover:shadow-[0_0_80px_rgba(217,241,84,0.6)]`
    );

  if (tone === "green")
    return (
      base +
      " bg-green-500/90 hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] shadow-[0_0_50px_rgba(34,197,94,0.3)]"
    );

  if (tone === "purple")
    return (
      base +
      " bg-purple-400/90 shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.8)]"
    );

  if (tone === "teal")
    return (
      base +
      " bg-teal-400/90 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
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

  const bubbleElsRef = useRef<Record<string, HTMLDivElement | null>>({});

  const seed: TechItem[] = [
    { id: "react", label: "React", size: "lg", tone: "lime", x: 18, y: 45 },
    { id: "node", label: "Node.js", size: "lg", tone: "blue", x: 30, y: 72 },
    { id: "ts", label: "TypeScript", size: "xl", tone: "teal", x: 83, y: 22 },

    { id: "mongo", label: "MongoDB", size: "md", tone: "lime", x: 44, y: 52 },
    { id: "php", label: "PHP", size: "md", tone: "blue", x: 45, y: 66 },

    { id: "next", label: "Next.js", size: "sm", tone: "blue", x: 41, y: 18 },
    { id: "mysql", label: "MySQL", size: "sm", tone: "green", x: 62, y: 20 },
    {
      id: "tailwind",
      label: "Tailwind",
      size: "sm",
      tone: "lime",
      x: 77,
      y: 42,
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
    const el = containerRef.current;
    if (!el) return;

    let last = performance.now();

    let W = el.clientWidth;
    let H = el.clientHeight;

    const ro = new ResizeObserver(() => {
      W = el.clientWidth;
      H = el.clientHeight;

      const pad = 8;
      for (const b of bubblesRef.current) {
        const d = vwToPx(sizeToVw(b.size));
        b.r = d / 2;
        b.x = Math.max(b.r + pad, Math.min(W - b.r - pad, b.x));
        b.y = Math.max(b.r + pad, Math.min(H - b.r - pad, b.y));

        const node = bubbleElsRef.current[b.id];
        if (node) {
          node.style.width = `${b.r * 2}px`;
          node.style.height = `${b.r * 2}px`;
        }
      }
    });

    ro.observe(el);

    const isSmall = typeof window !== "undefined" && window.innerWidth < 768;
    const friction = isSmall ? 0.998 : 0.985;
    const maxSpeed = 10;
    const wanderStrength = 0.45;
    const pad = 8;

    const speedMul = isSmall ? 0.55 : 1.2;
    const wanderMul = isSmall ? 0.55 : 1.25;

    let acc = 0;

    const FIXED_DT = 1 / 60;
    const MAX_CATCHUP = 0.25;

    const step = (now: number) => {
      let dt = (now - last) / 1000;
      last = now;

      dt = Math.min(dt, MAX_CATCHUP);

      acc += dt;

      while (acc >= FIXED_DT) {
        timeRef.current += FIXED_DT;

        for (const b of bubblesRef.current) {
          const seed = timeRef.current * 10 + b.x * 0.01 + b.y * 0.01;
          const n1 = hash01(seed);
          const n2 = hash01(seed + 100);

          const angle = n1 * Math.PI * 2;
          const force = (n2 - 0.5) * wanderStrength * wanderMul;

          b.vx += Math.cos(angle) * force;
          b.vy += Math.sin(angle) * force;

          b.vx *= friction;
          b.vy *= friction;

          const sp = Math.hypot(b.vx, b.vy);
          const maxSp = maxSpeed * speedMul;
          if (sp > maxSp) {
            b.vx = (b.vx / sp) * maxSp;
            b.vy = (b.vy / sp) * maxSp;
          }

          // move
          b.x += b.vx;
          b.y += b.vy;

          // bounce
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

        acc -= FIXED_DT;
      }

      for (const b of bubblesRef.current) {
        const node = bubbleElsRef.current[b.id];
        if (node) {
          node.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="w-full pt-16 pb-16 px-8">
      <div className="mx-auto">
        <div className="flex flex-col mx-auto">
          <Heading2>Tech I Build With</Heading2>
          <Desc>Tools I use often in real projects.</Desc>
        </div>

        <div
          ref={containerRef}
          className="mt-12 relative h-[50vh] w-full rounded-3xl"
        >
          <div className="pointer-events-none absolute left-0 top-10 h-px w-full " />

          {bubbles.map((b) => {
            const d = b.r * 2;

            return (
              <div
                key={b.id}
                ref={(node) => {
                  bubbleElsRef.current[b.id] = node;
                }}
                className={bubbleClass(
                  (b.tone ?? "blue") as NonNullable<TechItem["tone"]>,
                )}
                style={{
                  width: d,
                  height: d,
                  transform: `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0)`,
                }}
              >
                <span className="select-none font-semibold ">{b.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
