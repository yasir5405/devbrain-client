import { navLinks, toolLinks } from "@/constants/constant";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { BrainCircuitIcon, Search } from "lucide-react";
import { Kbd, KbdGroup } from "./ui/kbd";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", down);

    return () => window.removeEventListener("keydown", down);
  }, []);

  return (
    <nav className="w-full py-3 flex items-center justify-between border-b dark:border-b-neutral-800 px-3 md:px-12 fixed top-0 left-0">
      <div className="flex items-center justify-center w-fit gap-2 h-full">
        <Button variant={"ghost"} onClick={() => navigate("/")}>
          <BrainCircuitIcon className="size-4.25" />
        </Button>

        <div className="flex items-center justify-center w-fit gap-1 h-full">
          {navLinks.map((link) => (
            <Button
              className="hover:no-underline text-xs"
              variant={"ghost"}
              onClick={() => navigate(link.href)}
            >
              {link.icon && <link.icon />}
              {link.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center w-fit gap-4 h-full">
        <InputGroup onClick={() => setOpen(true)}>
          <InputGroupInput placeholder="Search tools or snippets..." />

          <InputGroupAddon>
            <Search />
          </InputGroupAddon>

          <InputGroupAddon align={"inline-end"}>
            <KbdGroup>
              <Kbd>⌘ K</Kbd>
            </KbdGroup>
          </InputGroupAddon>
        </InputGroup>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Search tools or roadmaps..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandGroup heading="Navigation">
                {navLinks.map((link) => (
                  <CommandItem onSelect={() => navigate(link.href)}>
                    {link.icon && <link.icon />}

                    <span>{link.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Tools">
                {toolLinks.map((link) => (
                  <CommandItem onSelect={() => navigate(link.href)}>
                    {link.icon && <link.icon />}
                    <span>{link.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>

            <div className="border-t px-3 py-2 text-xs text-muted-foreground flex items-center gap-2">
              <Kbd>↵</Kbd>
              Go to page
            </div>
          </Command>
        </CommandDialog>

        <Separator orientation="vertical" />

        <ModeToggle />

        <Separator orientation="vertical" />

        <Button>Sign in</Button>
      </div>
    </nav>
  );
};

export default Navbar;
