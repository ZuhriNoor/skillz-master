export default function AiIntegrationSection() {
  return (
    <section className="bg-white py-16 md:py-20 md:px-40">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary">
            AI Integrated IT
          </h2>
          <p className="mt-4 text-lg text-brand-primary">
            Master the latest technology tools and AI-powered applications that are shaping the future of healthcare and corporate administration.
          </p>
        </div>

        {/* Responsive Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: AI Tools Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 order-2 lg:order-1">
            <p className="text-center font-semibold text-gray-500 mb-4">
              AI Integrated
            </p>
            <img
              src="/ai-tools.png" 
              alt="Grid of AI tool logos like Tally, Canva, and Gemini"
              className="w-full h-auto border border-gray-400 rounded-3xl"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Cutting-edge artificial intelligence tools for enhanced productivity
            </p>
          </div>

          {/* Right Column: Woman with Badges Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/AI-integrated.png" 
              alt="Woman using a phone with floating badges for AI Integrated and Career Paths"
              className="w-full h-auto"
            />
          </div>

        </div>
        
      </div>
    </section>
  );
}
