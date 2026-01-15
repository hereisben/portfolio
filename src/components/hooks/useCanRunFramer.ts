import { useEffect, useState } from "react";

export default function useCanRunFramer() {
  const [canRunFramer, setCanRunFramer] = useState(false);
  useEffect(() => {
    const check = () => {
      setCanRunFramer(window.innerWidth >= 768);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return canRunFramer;
}
