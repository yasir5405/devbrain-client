import { Button } from "@/components/ui/button";
import { Laptop, Upload, X } from "lucide-react";

const JsonInputActionButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Button variant={"outline"} className="gap-2">
        <Laptop />
        Paste JSON
      </Button>

      <Button variant={"outline"} className="gap-2">
        <Upload />
        Upload File
      </Button>

      <Button variant={"outline"} className="gap-2">
        <X />
        Clear
      </Button>
    </div>
  );
};

export default JsonInputActionButtons;
