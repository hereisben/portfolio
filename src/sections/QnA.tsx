import Question from "@/components/cards/Question";
import TagCard from "@/components/cards/TagCard";
import Heading2 from "@/components/typo/Heading2";

export default function QnA() {
  return (
    <section className="w-full">
      <div className="bg-black px-4 md:px-8 py-8 md:mb-12 flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center mx-auto leading-">
          <TagCard label="FAQs" />
          <Heading2 classNames="mt-2 leading-snug">
            Frequently Asked Questions
          </Heading2>
        </div>
        <div className="bg-[#121212] rounded-3xl p-8 md:p-12 border border-white/5">
          <Question
            q="What roles are you currently looking for?"
            a="I am looking for an Entry-Level / Junior Software Engineer role.
I am mainly focused on web and full-stack development."
          />
          <Question
            q="What are your main strengths?"
            a="I am strongest in frontend and early-stage full-stack development.
I enjoy building clean UIs and wiring them to real APIs."
          />
          <Question
            q="Are you open to learning new technologies?"
            a="Yes.
I usually learn by building real projects, not just by reading documentation."
          />
          <Question
            q="What is the best way to contact you?"
            a="Email or LinkedIn.
I usually respond within 24 hours."
          />
        </div>
      </div>
    </section>
  );
}
