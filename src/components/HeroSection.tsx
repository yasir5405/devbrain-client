import { Zap } from "lucide-react";
import HeroBadge from "./HeroBadge";
import { Button } from "./ui/button";
import { HeroAnimatedTooltip } from "./HeroAnimatedTooltip";

const HeroSection = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row items-center justify-between">
      {/* Left Div */}
      <div className="h-full w-full md:w-[40%] flex gap-8 justify-center flex-col">
        <HeroBadge
          text="v1 is now live — Json Formatter"
          type="desktop"
          href="/tools/json-formatter"
        />

        <div className="flex md:block flex-col items-center justify-center">
          <h1 className="text-3xl md:text-7xl font-semibold">Your Developer</h1>
          <h1 className="text-3xl md:text-7xl font-semibold text-primary italic">
            Second Brain.
          </h1>
        </div>

        <p className="text-muted-foreground max-w-lg text-sm md:text-base text-center md:text-left">
          A unified suite of high-performance utilities, snippet management, and
          structured learning paths designed to keep you in the flow.
        </p>

        <div className="w-full flex flex-col md:flex-row max-w-lg gap-3">
          <Button size={"lg"} className="md:flex-1 dark:text-white gap-3">
            Start Building <Zap />{" "}
          </Button>
          <Button size={"lg"} variant={"outline"} className="md:flex-1">
            Explore Tools
          </Button>
        </div>

        <HeroAnimatedTooltip />
      </div>

      {/* Right div */}
      <div className="h-full w-full md:w-[60%]"></div>
    </div>
  );
};

export default HeroSection;
