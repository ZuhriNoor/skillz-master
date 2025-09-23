import FeatureCard from './FeatureCard';
import BenefitItem from './BenefitItem'; // <-- Import the new component

const benefits = [
  { icon: "/why1.png", text: "Recorded Classes of Live Class" },
  { icon: "/why2.png", text: "Flexible Class Timing" },
  { icon: "/why3.png", text: "Lifetime Spoken English Stream" },
  { icon: "/why4.png", text: "Internationally Recognised Certification" },
  { icon: "/why5.png", text: "Lifetime Career Support" },
  { icon: "/why6.png", text: "AI Intergrated IT Training" },
  { icon: "/why7.png", text: "Exclusive Training in Personal Branding" },
  { icon: "/why8.png", text: "Trained By Doctors And Healthcare Professional" },
  { icon: "/why9.png", text: "Live Classes" },
];


export default function WhyUs() {
  return (
    <section id="whyus" className="bg-white py-16 md:py-18 font-montserrat">
      <div className="container mx-auto px-6 md:px-40">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why Choose US?
          </h2>
          <p className="mt-4 text-md text-gray-600">
            Discover what makes Skillz Master Online Academy the perfect choice for your healthcare career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            image="/why1_1.jpg"
            title="Industry Recognition"
            description="Internationally recognised certification that opens doors worldwide"
          />
          <FeatureCard
            image="/why1_2.jpg"
            title="Expert Mentorship"
            description="Trained by doctors and healthcare professionals with real-world experience"
            isFeatured 
          />
          <FeatureCard
            image="/why1_3.jpg"
            title="AI-Powered Learning"
            description="Cutting-edge AI integrated IT training for the future of healthcare"
          />
        </div>

        {/* ## Grid for Small Benefit Items ## */}
        {/* We now map over the `benefits` array to render each item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index} // React needs a unique key for list items
              icon={benefit.icon}
              text={benefit.text}
            />
          ))}
        </div>

      </div>
    </section>
  );
}