import ReadinessItem from './ReadinessItem';

const readinessData = [
  {
    icon: "/job1.png",
    text: "ATS - Friendly Resume Preparation",
    iconPosition: "left",
  },
  {
    icon: "/job2.png",
    text: "Interview Training And Preparation",
    iconPosition: "right",
  },
  {
    icon: "/job3.png",
    text: "Common Interview Questions & Answering Techniques",
    iconPosition: "left",
  },
  {
    icon: "/job4.png",
    text: "Mock Interview And Practice Sessions",
    iconPosition: "right",
  },
  {
    icon: "/job5.png",
    text: "Job Search Strategies And Use Of Online Job Portal",
    iconPosition: "left",
  },
];

export default function JobReadinessSection() {
  return (
    <section className="bg-white py-16 md:py-16 md:px-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
         
          <div className="relative flex justify-center items-center">
            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-brand-primary rounded-full z-0"></div>
            <img
              src="/woman-2.png"
              alt="Professional woman ready for a job"
              className="relative z-10 h-auto w-3/5 md:w-full max-h-[600px] bottom-9 object-contain drop-shadow-bottom-right"
            />
          </div>
          
          <div className="min-w-0 md:mr-1 px-5 md:px-0"> {/* This is key - allows content to shrink */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Job Readiness
            </h2>
            <p className="mt-4 text-md text-gray-600">
              Comprehensive career preparation program designed to make you interview-ready and help you land your dream job in healthcare or corporate sector.
            </p>
            <div className="space-y-6 mt-10">
              {readinessData.map((item, index) => (
                <ReadinessItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  iconPosition={item.iconPosition}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}