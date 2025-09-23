import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import CareerOpportunities from "./components/CareerOpportunities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JobReadinessSection from "./components/JobReadiness";
import SectorsSection from "./components/SectorsSection";
import AiIntegrationSection from "./components/AiIntegrationSection";

export default function App() {
  return (
    <div className="font-fredoka bg-white text-gray-900">
      <Navbar />
      <Hero />
      <WhyUs />
      <Courses />
      <JobReadinessSection/>
      <CareerOpportunities />
      <SectorsSection/>
      <AiIntegrationSection/>
      <Contact />
      <Footer />
    </div>
  );
}
