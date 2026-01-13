import { PROJECTS_CONFIG } from "@/config/projects";
import FocusCard from "../cards/FocusCard";

export default function FocusContainer() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <FocusCard
        href="/projects/course"
        label="Course Projects"
        imgUrl="/course.jpg"
        imgAlt="Course Projects"
        subLabel="Projects built for coursework with clear requirements and deadlines."
        xPart={`${PROJECTS_CONFIG.course.items.length} Projects`}
      />
      <FocusCard
        href="/projects/personal"
        imgUrl="/personal.jpg"
        imgAlt="Personal Projects"
        label="Personal Projects"
        subLabel="Self-initiated projects to practice and explore ideas."
        xPart={`${PROJECTS_CONFIG.personal.items.length} Projects`}
      />
      <FocusCard
        href="/projects/team"
        imgUrl="/team.png"
        imgAlt="Team Projects"
        label="Team Projects"
        subLabel="Projects built in small teams with shared responsibility."
        xPart={`${PROJECTS_CONFIG.team.items.length} Projects`}
      />
    </div>
  );
}
