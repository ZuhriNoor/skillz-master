import FeatureCard from './FeatureCard';
import BenefitItem from './BenefitItem'; // <-- Import the new component

// Data for the 9 benefit items
const benefits = [
  { icon: "/path/to/icon1.png", text: "Recorded Classes of Live Class" },
  { icon: "/path/to/icon2.png", text: "Flexible Class Timing" },
  { icon: "/path/to/icon3.png", text: "Lifetime Spoken English Stream" },
  { icon: "/path/to/icon4.png", text: "Internationally Recognised Certification" },
  { icon: "/path/to/icon5.png", text: "Lifetime Career Support" },
  { icon: "/path/to/icon6.png", text: "AI Intergrated IT Training" },
  { icon: "/path/to/icon7.png", text: "Exclusive Training in Personal Branding" },
  { icon: "/path/to/icon8.png", text: "Trained By Doctors And Healthcare Professional" },
  { icon: "/path/to/icon9.png", text: "Live Classes" },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 md:py-18 font-montserrat">
      <div className="container mx-auto px-6 md:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
            Why Choose US?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes Skillz Master Online Academy the perfect choice for your healthcare career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            image="/path/to/industry-recognition.png"
            title="Industry Recognition"
            description="Internationally recognised certification that opens doors worldwide"
          />
          <FeatureCard
            image="/path/to/expert-mentorship.png"
            title="Expert Mentorship"
            description="Trained by doctors and healthcare professionals with real-world experience"
            isFeatured 
          />
          <FeatureCard
            image="/path/to/ai-learning.png"
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