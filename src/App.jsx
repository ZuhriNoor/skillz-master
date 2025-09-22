import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-fredoka bg-white text-gray-900">
      <Navbar />
      <Hero />
      <WhyUs />
      <Courses />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
