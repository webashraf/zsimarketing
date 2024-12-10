import DiscoverFleet from "@/components/homePage/DiscoverFleet";
import Hero from "@/components/homePage/Hero";
import ProfessionalChauffeurs from "@/components/homePage/ProfessionalChauffeurs";
import QuickPriceCheck from "@/components/homePage/QuickPriceCheck";

export default function Home() {
  return (
    <div className="min-h-screen pb-10">
      <Hero />
      <div className="max-w-[1320px] mx-auto ">
        <QuickPriceCheck />
        <DiscoverFleet />
        {/* Uniq section */}
        <ProfessionalChauffeurs />
      </div>
    </div>
  );
}
