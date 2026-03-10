import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface Tools {
  title: string;
  href: string;
  description: string;
}

const tools: Tools[] = [
  {
    title: "Json Formatter",
    href: "/tools/json",
    description: "Format, validate and beautify JSON instantly in your browser",
  },
  {
    title: "Base64 Tool",
    href: "/tools/base64",
    description: "Encode and decode Base64 strings instantly in your browser",
  },
  {
    title: "Markdown Preview",
    href: "/tools/markdown",
    description: "Write and preview Markdown with a live side-by-side renderer",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full py-3 flex items-center justify-between fixed top-0 left-0 px-2 md:px-15 border-b border-neutral-200 shadow-2xs bg-background">
      {/* <h1>DevBrain</h1> */}
      <img
        onClick={() => navigate("/")}
        src="/logo.PNG"
        alt="logo"
        className="h-9 w-auto object-contain cursor-pointer"
      />

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={"/features"}>Features</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>Dev Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                {tools.map((tool) => (
                  <ListItem
                    key={tool.title}
                    title={tool.title}
                    href={tool.href}
                  >
                    {tool.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>All Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                {tools.map((tool) => (
                  <ListItem
                    key={tool.title}
                    title={tool.title}
                    href={tool.href}
                  >
                    {tool.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={"/about"}>About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="h-full flex items-center justify-between gap-2">
        <Button variant={"outline"}>Login</Button>
        <Button>Signup</Button>
      </div>
    </nav>
  );
};

export default Navbar;

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="flex flex-col gap-1 text-sm p-1">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
