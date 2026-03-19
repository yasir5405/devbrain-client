import type { navLinksInterface } from "@/types/navlinks.types";
import { Code, Compass, Map, Zap, Braces, Binary, Key } from "lucide-react";

export const navLinks: navLinksInterface[] = [
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Tools", href: "/tools", icon: Zap },
  { name: "Snippet", href: "/snippets", icon: Code },
  { name: "Roadmap", href: "/roadmap", icon: Map },
];

export const toolLinks: navLinksInterface[] = [
  { name: "Json Formatter", href: "/tools/json-formatter", icon: Braces },
  { name: "Base64 Encoder/Decode", href: "/tools/base64", icon: Binary },
  { name: "JWT Decoder", href: "/tools/jwt-decoder", icon: Key },
];
