import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import FooterIcon from "../buttons/FooterIcon";

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-32 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Ben Nguyen <span className="text-primary">.</span>
        </h2>
        <div className="flex justify-center gap-6 mb-8">
          <FooterIcon
            href="https://github.com/hereisben"
            icon={<Github size={18} />}
          />
          <FooterIcon
            href="www.linkedin.com/in/here-is-ben"
            icon={<Linkedin size={18} />}
          />
          <FooterIcon
            href="mailto:hi.imben.nguyen@gmail.com"
            icon={<Mail size={18} />}
          />
          <FooterIcon
            href="https://www.facebook.com/heyimben"
            icon={<Facebook size={18} />}
          />
        </div>
        <p className="text-sm text-neutral-400 opacity-50">
          © 2026 Ben Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
