import SectorCard from './SectorCard'; // <-- Import the new component

const sectorsData = [
    { icon: "/hospital.png", name: "Hospitals" },
    { icon: "/hospital.png", name: "Diagnostic Centers" },
    { icon: "/hospital.png", name: "Insurance companies" },
    { icon: "/hospital.png", name: "Event Management" },
    { icon: "/hospital.png", name: "Hotels" },
    { icon: "/hospital.png", name: "Clinics" },
    { icon: "/hospital.png", name: "Educational Institutions" },
    { icon: "/hospital.png", name: "Health-tech Companies" },
    { icon: "/hospital.png", name: "Travel & Tour Companies" },
    { icon: "/hospital.png", name: "Retail Stores" },
    { icon: "/hospital.png", name: "Business Consulting" },
    { icon: "/hospital.png", name: "Schools" },
    { icon: "/hospital.png", name: "IT Companies" },
    { icon: "/hospital.png", name: "Jewelleries" },
];



export default function SectorsSection() {
  return (
    <section className="bg-[#EDF1FF] py-16 md:py-24 px-4 md:px-40">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#101566]">
              Job Offered Sectors
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#101566] text-md">
              Work across various industries and sectors with your healthcare management expertise
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
          {sectorsData.map((sector, index) => (
            <SectorCard
              key={index}
              icon={sector.icon}
              name={sector.name}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}