import { useNavigate } from "react-router-dom";

const HeroBadge = ({
  text,
  type,
  href,
}: {
  text: string;
  type: "mobile" | "desktop";
  href?: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`w-fit px-8 py-1 rounded-full border border-primary text-xs md:text-sm font-semibold text-primary ${type === "mobile" && "block md:hidden mx-auto"} cursor-pointer`}
      onClick={() => navigate(href ?? "/")}
    >
      {text}
    </div>
  );
};

export default HeroBadge;
