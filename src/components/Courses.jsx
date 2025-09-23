import CourseCard from './CourseCard'; 


const coursesData = [
  {
    icon: "/course1.png", 
    title: "Hospital Administration & Healthcare Management",
    description: "Comprehensive training in healthcare operations, patient relations, and facility management",
    modules: [
      "Foundation Of Hospital Healthcare Departments & Services",
      "Hospital Patient Relation & Service Management",
      "Healthcare Operations & Workflow Management",
      "Bio-medical Waste & Facility Safety",
      "Hospital IT & Administrative Tools",
      "Quality Management in Healthcare",
      "Insurance & Hospital Billing Systems",
      "Healthcare Entrepreneurship & MSME Development",
    ],
  },
  {
    icon: "/course2.png", 
    title: "HR & Corporate Administration",
    description: "Master corporate operations, human resources, and business development strategies",
    modules: [
      "Information Systems",
      "Personal Branding - Building A Professional Identity",
      "Corporate Office Management",
      "HR Operation & Employee Management",
      "Business Development",
      "Marketing, Branding & Digital Strategy",
      "Basic Financial Management & Tally Accounting",
      "Entrepreneurship & Business Basics",
    ],
  },
];

export default function Courses() {
  return (
    <section className="bg-[#101566] py-16 md:py-16 font-montserrat">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-brand-accent">
            Our Courses
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-300 mt-2">
            Advanced Diploma Programs
          </h2>
          <p className="mt-4 text-gray-300 font-medium">
            Choose from our specialized diploma programs designed to prepare you for successful careers in healthcare management and corporate administration.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coursesData.map((course, index) => (
            <CourseCard
              key={index}
              icon={course.icon}
              title={course.title}
              description={course.description}
              modules={course.modules}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}