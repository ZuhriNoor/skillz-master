// Data array for all the job titles.
// To add or remove a job, you only need to change this list.
const jobTitles = [
  "Marketing Manager", "OP Manager", "Social Media Manager", "HR Manager",
  "Sales Manager", "IP Manager", "Accounts Manager", "Public Relations Officer",
  "IT Manager", "Quality Manager", "Health Insurance Manager", "Customer Relations Manager",
  "Purchase Manager", "Front Office Manager", "Entrepreneur", "Operation Manager",
  "Business Development Manager", "Education Centre Manager", "Guest Relation Manager", "Health Information Manager",
];

export default function CareerOpportunities() {
  return (
    <section className="relative py-16 md:py-16 overflow-hidden">
      
      {/* Layer 1: The Background Image (bottom layer) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/career.jpg" 
          alt="Office environment with professionals working"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Layer 2: The Dark Overlay (middle layer) */}
      <div className="absolute inset-0 bg-white/60 z-10"></div>


      {/* ## Content Layer ## */}
      {/* This container sits on top of the background layers */}
      <div className="relative z-20 container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary">
            Career Opportunities
          </h2>
          <p className="mt-4 text-lg text-brand-primary">
            Unlock exciting career opportunities across healthcare and corporate sectors with our comprehensive training
          </p>
        </div>

        {/* Responsive Grid for Job Titles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {jobTitles.map((title, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center bg-white/95 rounded-lg p-4 text-center shadow-gray-500 shadow-md border border-gray-200/50"
            >
              <span className="font-semibold text-brand-primary text-sm md:text-base">
                {title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}