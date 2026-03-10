import ToolCard from "@/components/Cards/ToolCard";

const tools = [
  {
    title: "Json Formatter",
    href: "/tools/json",
    description:
      "Format, validate and beautify JSON instantly in your browser. No data leaves your machine",
    img: "/json-formatter.PNG",
  },
  {
    title: "Base64 Tool",
    href: "/tools/base64",
    description: "Encode and decode Base64 strings instantly in your browser",
    img: "/base64-tool.PNG",
  },
  {
    title: "Markdown Preview",
    href: "/tools/markdown",
    description: "Write and preview Markdown with a live side-by-side renderer",
    img: "/markdown-preview.PNG",
  },
];

const Features = () => {
  return (
    <div className="min-h-dvh w-full flex flex-col pt-10 md:pt-15">
      <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-5xl">
        Dev tools you need, all in one place
      </h1>

      <p className="text-center text-muted-foreground text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto">
        A curated suite of developer utilities — format, encode, preview, and
        more — all running locally in your browser with no data leaving your
        machine.
      </p>

      <div className="w-full mt-12 md:mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <ToolCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            img={tool.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
