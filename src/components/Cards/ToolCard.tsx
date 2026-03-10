import { useNavigate } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  img: string;
}
const ToolCard = ({ description, href, img, title }: ToolCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="group flex flex-col gap-3 border border-neutral-200 rounded-xl shadow-xs py-8 px-6 cursor-pointer hover:shadow-md hover:border-neutral-300 bg-background w-full min-h-52"
      onClick={() => navigate(href)}
    >
      <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center">
        <img src={img} alt={title} className="object-contain" />
      </div>

      <h2 className="font-semibold text-lg">{title}</h2>

      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default ToolCard;
