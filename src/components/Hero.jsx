export default function Hero() {
  return (
    <section className="md:min-h-screen bg-white flex items-center m-5 md:m-0 md:pt-5 pb-16 overflow-hidden relative"> 
      {/* Relative wrapper to contain both the background and the content */}
      <div className="container mx-auto relative ">

        {/* Gray background shape */}
        <div className="absolute inset-y-0 left-0 md:left-28 w-full md:w-10/12 bg-neutral-100 rounded-3xl z-0 md:ml-4"></div>


        {/* Rectangle */}
        <div className="absolute z-10 top-10 right-0 md:right-48 w-72 h-[55%] hidden md:block bg-brand-accent rounded-t-full rounded-b-lg"></div>

        {/* Blue Circle */}
        <div className="absolute z-10 bottom-8 right-0 md:right-96 w-64 h-64 hidden md:block bg-brand-primary rounded-full transform"></div>


        <div className="relative grid md:grid-cols-[60%_40%] items-center pt-6 md:pt-0">
          {/* Left Content */}
          <div className="font-montserrat text-center md:text-left md:pl-12 lg:pl-16 md:py-8">
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
              className="mt-4 md:mt-8 inline-block bg-brand-primary text-white px-6 py-3 rounded-md text-xs md:text-lg font-montserrat font-semibold hover:bg-brand-secondary transition"
            >
              Enroll Now
            </a>
            <div className="w-16 md:w-24 h-1 md:h-1.5 bg-gray-500 mt-4 md:mt-8 mx-auto md:mx-0 rounded-sm"></div>
          </div>

          {/* Right Image with Badge */}
          <div className="relative flex justify-center md:justify-end z-10"> 
            {/* Main Image */}
            <img
              src="/HR-image6.png"
              alt="Students learning"
              className="h-auto w-3/5 md:w-full max-h-[650px] object-contain md:object-right"
              
            />

            {/* Floating Badge */}
            <div className="absolute top-3 right-0 md:top-44 md:right-80 bg-white shadow-lg rounded-full flex items-center gap-2 px-4 py-2 text-[0.6rem] md:text-base font-montserrat font-medium">
              <span className="bg-brand-red text-white p-2 rounded-full">📘</span>
              203+ Resources
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}