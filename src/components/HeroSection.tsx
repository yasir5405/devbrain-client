import { Zap } from "lucide-react";
import HeroBadge from "./HeroBadge";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="w-full h-[90vh] flex items-center justify-between">
      <div className="h-full w-[40%] flex gap-8 justify-center flex-col">
        <HeroBadge
          text="v1 is now live — Json Formatter"
          type="desktop"
          href="/tools/json-formatter"
        />

        <div>
          <h1 className="text-7xl font-semibold">Your Developer</h1>
          <h1 className="text-7xl font-semibold text-primary italic">
            Second Brain.
          </h1>
        </div>

        <p className="text-accent-foreground max-w-lg">
          A unified suite of high-performance utilities, snippet management, and
          structured learning paths designed to keep you in the flow.
        </p>

        <div className="w-full flex max-w-lg gap-3">
          <Button size={"lg"} className="flex-1 dark:text-white gap-3">
            Start Building <Zap />{" "}
          </Button>
          <Button size={"lg"} variant={"outline"} className="flex-1">
            Explore Tools
          </Button>
        </div>
      </div>

      <div className="h-full w-[60%]"></div>
    </div>
  );
};

export default HeroSection;
