import StatsBadge from "../badges/StatsBadge";
import Desc from "../typo/Desc";
import Heading2 from "../typo/Heading2";

export default function IntentContainer() {
  const hightlight = "text-white font-semibold";
  return (
    <div className="flex flex-col justify-center gap-2 max-w-max">
      <Heading2 classNames="w-xl">
        Built on Logic, <span className="text-primary">Finish with Care</span>
      </Heading2>
      <Desc classNames="mb-5">
        When I work on a project, I try to understand the{" "}
        <span className={hightlight}>problem clearly</span> before writing code.
        I usually start by breaking things down, figuring out the data flow, and
        making sure the logic makes sense.
      </Desc>
      <Desc>
        I am looking for a team where I can work on{" "}
        <span className={hightlight}>real features</span>, see how my code is
        used, and improve it through feedback and iteration. I work best when I
        know what needs to be done and can focus on building{" "}
        <span className={hightlight}>something solid</span>.
      </Desc>
      <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8">
        <StatsBadge label="one" subLabel="Clear Goal" />
        <StatsBadge label="many" subLabel="Iterations" />
        <StatsBadge label="full" subLabel="Ownership" />
      </div>
    </div>
  );
}
