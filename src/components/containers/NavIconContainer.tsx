import { Briefcase, Home, Route, Target } from "lucide-react";
import NavIcon from "../icons/NavIcon";

export default function NavIconContainer() {
  return (
    <div className="flex items-center md:gap-1 shrink-0">
      <NavIcon url="/#hero" icon={<Home className="w-5 h-5" />} label="Home" />
      <NavIcon
        url="/#intent"
        icon={<Target className="w-5 h-5" />}
        label="Intent"
      />
      <NavIcon
        url="/#focus"
        icon={<Briefcase className="w-5 h-5" />}
        label="Project"
      />
      <NavIcon
        url="/#journey"
        icon={<Route className="w-5 h-5" />}
        label="Journey"
      />
    </div>
  );
}
