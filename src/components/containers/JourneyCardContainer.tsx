"use client";

import { easeOut } from "framer-motion";
import Dot from "../badges/Dot";
import JourneyCard from "../cards/JourneyCard";

export default function JourneyCardContainer() {
  return (
    <div className={`relative mx-auto flex flex-col gap-8 pl-10 md:pl-0`}>
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-primary/50 to-transparent shadow-[0_0_10px_#D9F154]"></div>
      <div className="relative md:-translate-x-1/2">
        <Dot classNames="md:-right-2 -left-12 md:left-auto" />
        <JourneyCard
          classNames=""
          motionProps={{
            initial: { opacity: 0, x: -24 },
            whileInView: { opacity: 1, x: 0 },
            whileHover: { x: -10 },
            viewport: { amount: 0.5 },
            transition: { duration: 0.55, ease: easeOut },
          }}
          timeRange="Jan 2026 - Current"
          label="
  Software Engineering Intern"
          subLabel="IDX Exchange"
          desc="Working as a software engineering intern, contributing to real-world features, improving production code, and strengthening full-stack and frontend development skills in a team environment."
        />
      </div>
      <div className="relative md:translate-x-1/2">
        <Dot classNames="md:-left-2 -left-12" />
        <JourneyCard
          motionProps={{
            initial: { opacity: 0, x: 24 },
            whileInView: { opacity: 1, x: 0 },
            whileHover: { x: 10 },
            viewport: { amount: 0.5 },
            transition: { duration: 0.55, ease: easeOut },
          }}
          classNames="md:ml-5"
          timeRange="Aug 2024 - Dec 2026"
          label="Bachelor of Science in Computer Science"
          subLabel="San José State University"
          desc="Focused on building strong fundamentals in data structures, software design, and full-stack web development. Worked on real projects while balancing school and personal engineering work."
        />
      </div>
      <div className="relative md:-translate-x-1/2">
        <Dot classNames="md:-right-2 -left-12 md:left-auto" />
        <JourneyCard
          classNames=""
          motionProps={{
            initial: { opacity: 0, x: -24 },
            whileInView: { opacity: 1, x: 0 },
            whileHover: { x: -10 },
            viewport: { amount: 0.5 },
            transition: { duration: 0.55, ease: easeOut },
          }}
          timeRange="Jun 2022 - May 2024"
          label="
  Associate of Science in Computer Science"
          subLabel="Evergreen Valley College"
          desc="Built a solid foundation in programming, problem solving, and computer science fundamentals.
  This is where I confirmed that I wanted to pursue software engineering seriously."
        />
      </div>
    </div>
  );
}
