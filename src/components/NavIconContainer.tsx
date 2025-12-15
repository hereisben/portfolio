import { Briefcase, Home, Mail, User } from "lucide-react";
import NavIcon from "./buttons/NavIcon";

export default function NavIconContainer() {
  return (
    <div className="flex items-center gap-1 shrink-0">
      <NavIcon url="/" icon={<Home className="w-5 h-5" />} label="Home" />
      <NavIcon url="/" icon={<User className="w-5 h-5" />} label="About" />
      <NavIcon
        url="/"
        icon={<Briefcase className="w-5 h-5" />}
        label="Project"
      />
      <NavIcon url="/" icon={<Mail className="w-5 h-5" />} label="Contact" />
    </div>
  );
}
