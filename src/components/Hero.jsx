export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center pt-5 pb-16">
      {/* New relative wrapper to contain both the background and the content */}
      <div className="container mx-auto relative">
        
        {/* Gray background shape */}
        <div className="absolute inset-y-0 left-0 md:left-28 w-full md:w-10/12 bg-gray-100 rounded-3xl z-0"></div>

        <div className="relative grid md:grid-cols-[60%_40%] items-center">
          {/* Left Content */}
          <div className="font-raleway text-center md:text-left pl-8 md:pl-12 lg:pl-16 py-8">
            {/* Small subtitle */}
            <p className="text-brand-primary text-lg md:text-2xl font-bold mb-3">
              Advanced Diploma in
            </p>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              HOSPITAL ADMINISTRATION & <br className="hidden md:block" />
              HEALTHCARE MANAGEMENT
            </h1>

            {/* Secondary Heading */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-primary mt-3">
              HR & CORPORATE ADMINISTRATION
            </h2>

            {/* CTA */}
            <a
              href="#enroll"
              className="mt-8 inline-block bg-brand-primary text-white px-6 py-3 rounded-md text-lg font-montserrat font-semibold hover:bg-brand-secondary transition"
            >
              Enroll Now
            </a>
          </div>

          {/* Right Image with Badge */}
          <div className="relative flex justify-end">
            {/* Main Image */}
            <img
              src="/HR-image6.png"
              alt="Students learning"
              className="h-auto max-h-[650px] w-auto md:w-full object-contain md:object-right"
            />

            {/* Floating Badge */}
            <div className="absolute top-6 right-6 md:top-44 md:right-80 bg-white shadow-lg rounded-full flex items-center gap-2 px-4 py-2 text-sm md:text-base font-montserrat font-medium">
              <span className="bg-red-500 text-white p-2 rounded-full">📘</span>
              203+ Resources
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}