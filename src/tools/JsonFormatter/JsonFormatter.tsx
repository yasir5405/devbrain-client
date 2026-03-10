import JsonInputActionButtons from "./JsonInputActionButtons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Copy, List } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type JsonInput = {
  json: string;
};

const LineNumbers = ({ count }: { count: number }) => (
  <div className="flex flex-col items-end pr-3 select-none text-muted-foreground/50 text-xs font-mono border-r border-border min-w-8 pt-1">
    {Array.from({ length: count }, (_, i) => (
      <span key={i + 1} className="leading-6">
        {i + 1}
      </span>
    ))}
  </div>
);

const JsonFormatter = () => {
  const { register, handleSubmit } = useForm<JsonInput>();

  const [outputJson, setOutputJson] = useState("");

  const handleJsonFormat = ({ json }: JsonInput) => {
    try {
      const parsed = JSON.parse(json);

      const formatted = JSON.stringify(parsed, null, 2);
      setOutputJson(formatted);
    } catch {
      toast.error("Invalid JSON", { position: "top-center" });
    }
  };

  const handleMinify = ({ json }: JsonInput) => {
    try {
      const parsed = JSON.parse(json);

      const minified = JSON.stringify(parsed);

      setOutputJson(minified);
    } catch {
      toast.error("Invalid JSON", { position: "top-center" });
    }
  };

  const handleCopyOutput = ({ json }: JsonInput) => {
    navigator.clipboard.writeText(json);
    toast.success("Output Json copied to clipboard", {
      position: "top-center",
    });
  };
  return (
    <div className="w-full h-full pt-8 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
          JSON Formatter
        </h1>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl">
          Format, validate and beautify JSON instantly in your browser. No data
          leaves your machine.
        </p>
      </div>

      <JsonInputActionButtons />

      <form
        onSubmit={handleSubmit(handleJsonFormat)}
        className="w-full flex gap-4"
      >
        {/* Left panel — Input JSON */}
        <div className="flex-1 border rounded-xl flex flex-col gap-3 p-4">
          <h2 className="font-semibold text-base">Input JSON</h2>
          <div className="flex rounded-md border overflow-hidden bg-muted/30">
            <LineNumbers count={10} />
            <Textarea
              placeholder="{}"
              className="flex-1 resize-none border-0 bg-transparent font-mono text-sm h-64 focus-visible:ring-0 rounded-none"
              {...register("json")}
            />
          </div>
        </div>

        {/* Right panel — Formatted Output */}
        <div className="flex-1 border rounded-xl flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base">Formatted Output</h2>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs"
              onClick={handleSubmit(handleCopyOutput)}
            >
              <Copy className="size-3.5" />
              Copy
            </Button>
          </div>
          <div className="flex rounded-md border overflow-hidden bg-muted/30">
            <LineNumbers count={10} />
            <Textarea
              readOnly
              placeholder="{}"
              value={outputJson}
              className="flex-1 resize-none border-0 bg-transparent font-mono text-sm h-64 focus-visible:ring-0 rounded-none"
            />
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Button size="sm" type="submit">
              Format JSON
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={handleSubmit(handleMinify)}
            >
              <List className="size-4" />
              Minify
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={handleSubmit(handleCopyOutput)}
            >
              <Copy className="size-4" />
              Copy Output
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JsonFormatter;
