import { navLinks } from "@/constants/constant";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";
import { Kbd, KbdGroup } from "./ui/kbd";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full py-3 flex items-center justify-between border-b px-3 md:px-12 fixed top-0 left-0">
      <div className="flex items-center justify-center w-fit gap-18 h-full">
        <h1>DevBrain</h1>

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

      <div className="flex items-center justify-center w-fit gap-10 h-full">
        <InputGroup>
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

        <div className="flex items-center justify-center w-fit gap-2 h-full">
          <Button variant={"ghost"}>Sign in</Button>
          <Button>Sign up</Button>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
