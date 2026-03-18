import type { navLinksInterface } from "@/types/navlinks.types";
import { Code, Compass, Map, Zap } from "lucide-react";

export const navLinks: navLinksInterface[] = [
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Tools", href: "/tools", icon: Zap },
  { name: "Snippet", href: "/snippets", icon: Code },
  { name: "Roadmap", href: "/roadmap", icon: Map },
];
