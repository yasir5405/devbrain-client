import HeroBadge from "@/components/HeroBadge";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col gap-6">
      <HeroBadge text="Developer Productivity Suite" type="mobile" />

      <HeroSection />
    </div>
  );
};

export default Home;
