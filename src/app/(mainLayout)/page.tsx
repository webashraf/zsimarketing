import DiscoverFleet from "@/components/homePage/DiscoverFleet";
import QuickPriceCheck from "@/components/homePage/QuickPriceCheck";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1320px] mx-auto ">
        <QuickPriceCheck />
        <DiscoverFleet />
      </div>
    </div>
  );
}
