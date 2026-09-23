import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import TestMethodSearch from "@/components/TestMethodSearch";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <TestMethodSearch />
        <Industries />
        <Process />
        <Capabilities />
        <CaseStudies />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
