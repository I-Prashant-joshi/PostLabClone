import AboutSection from "@/Components/AboutSection";
import BuildingSection from "@/Components/BuildingSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative z-20  bg-[linear-gradient(to_right,transparent_0,transparent_20%,rgb(223,223,217)_20%,rgb(223,223,217)_calc(20%+1px),transparent_calc(20%+1px),transparent_50%,rgb(223,223,217)_50%,rgb(223,223,217)_calc(50%+1px),transparent_calc(50%+1px),transparent_80%,rgb(223,223,217)_80%,rgb(223,223,217)_calc(80%+1px),transparent_calc(80%+1px),transparent_100%)] bg-[#f8f8f2]
         ">
        <Header />
        <AboutSection />
        <BuildingSection />
      </div>
        <div className="h-[80vh]"></div>

      <Footer />
    </div>
  );
}
