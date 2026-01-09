import FocusCard from "../cards/FocusCard";

export default function FocusContainer() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <FocusCard
        label="Course Projects"
        imgUrl="/course.jpg"
        imgAlt="Course Projects"
        subLabel="Projects built for coursework with clear requirements and deadlines."
        xPart="6 Projects"
      />
      <FocusCard
        imgUrl="/personal.jpg"
        imgAlt="Personal Projects"
        label="Personal Projects"
        subLabel="Self-initiated projects to practice and explore ideas."
        xPart="5 Projects"
      />
      <FocusCard
        imgUrl="/team.png"
        imgAlt="Team Projects"
        label="Team Projects"
        subLabel="Projects built in small teams with shared responsibility."
        xPart="4 Projects"
      />
    </div>
  );
}
