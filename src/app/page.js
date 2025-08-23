import AboutSection from "@/Components/AboutSection";
import BuildingSection from "@/Components/BuildingSection";
import Header from "@/Components/Header";
import TopNav from "@/Components/topNav";
export default function Home() {
  return (
   <div className="h-[100%] bg-[#F8F8F2] bg-[linear-gradient(to_right,transparent_0,transparent_20%,rgb(223,223,217)_20%,rgb(223,223,217)_calc(20%+1px),transparent_calc(20%+1px),transparent_50%,rgb(223,223,217)_50%,rgb(223,223,217)_calc(50%+1px),transparent_calc(50%+1px),transparent_80%,rgb(223,223,217)_80%,rgb(223,223,217)_calc(80%+1px),transparent_calc(80%+1px),transparent_100%)] z-90">
    {/* <TopNav /> */}
    <Header />
    <AboutSection />
    <BuildingSection />
    
    </div>
  );
}
