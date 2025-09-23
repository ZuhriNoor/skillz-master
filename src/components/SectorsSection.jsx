import SectorCard from './SectorCard'; // <-- Import the new component

const sectorsData = [
    { icon: "/sector1.png", name: "Hospitals" },
    { icon: "/sector2.png", name: "Diagnostic Centers" },
    { icon: "/sector3.png", name: "Insurance companies" },
    { icon: "/sector4.png", name: "Event Management" },
    { icon: "/sector5.png", name: "Hotels" },
    { icon: "/sector6.png", name: "Clinics" },
    { icon: "/sector7.png", name: "Educational Institutions" },
    { icon: "/sector8.png", name: "Health-tech Companies" },
    { icon: "/sector9.png", name: "Travel & Tour Companies" },
    { icon: "/sector10.png", name: "Retail Stores" },
    { icon: "/sector11.png", name: "Business Consulting" },
    { icon: "/sector12.png", name: "Schools" },
    { icon: "/sector13.png", name: "IT Companies" },
    { icon: "/sector14.png", name: "Jewelleries" },
];


export default function SectorsSection() {
    return (
        <section className="bg-[#EDF1FF] py-16 md:py-24 px-4 md:px-40 font-montserrat">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#101566]">
                            Job Offered Sectors
                        </h2>
                    </div>
                    <div className="max-w-md text-center md:text-left">
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