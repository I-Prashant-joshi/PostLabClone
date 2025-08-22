import ExpandingCards from "@/Components/BlockSection";
import FrontSection from "@/Components/FrontSection";
import TopNav from "@/Components/topNav";
export default function Home() {
  return (
   <div className="h-screen bg-[#F8F8F2] bg-[linear-gradient(to_right,transparent_0,transparent_20%,rgb(200,200,195)_20%,rgb(200,200,195)_calc(20%+1px),transparent_calc(20%+1px),transparent_50%,rgb(200,200,195)_50%,rgb(200,200,195)_calc(50%+1px),transparent_calc(50%+1px),transparent_80%,rgb(200,200,195)_80%,rgb(200,200,195)_calc(80%+1px),transparent_calc(80%+1px),transparent_100%)]">
    <TopNav />
    <FrontSection />
    <ExpandingCards />
    </div>
  );
}
