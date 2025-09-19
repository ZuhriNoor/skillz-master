import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Programs from "./components/Programs";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-fredoka bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Programs />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
