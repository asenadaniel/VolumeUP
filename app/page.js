import Process from "@/components/Process";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import MarketBestPracticeAdoption from "@/components/MarketBestPracticeAdoption";
import OurReferees from "@/components/OurReferees";
import CaseStudies from "@/components/CaseStudies";
import OurWork from "@/components/OurWork";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
;


export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Services />
      <MarketBestPracticeAdoption />
      <Process />
      <OurReferees />
      <CaseStudies />
      <OurWork />
      <Team />
      <Footer />
    </div>
  );
}
