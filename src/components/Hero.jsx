export default function Hero() {
  return (
    <section className="min-h-screen bg-brand-neutral flex items-center px-6 pt-20 pb-16"> 
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Shape Healthcare’s Future with{" "}
            <span className="text-brand-primary">Skillz Master Academy</span>
          </h2>

          <h3 className="text-3xl font-semibold text-brand-secondary mb-4">
            Advanced Diploma Programs:
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-xl space-y-2 mb-8">
            <li>Hospital Administration & Healthcare Management</li>
            <li>HR & Corporate Administration</li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#programs"
              className="bg-brand-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-brand-secondary transition"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="border-2 border-brand-red text-brand-red px-6 py-3 rounded-lg text-lg font-semibold hover:bg-brand-red hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/HR-image2.png"
            alt="Students learning"
            className="w-full max-w-3xl rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
