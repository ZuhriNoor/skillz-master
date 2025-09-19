const programs = [
  {
    title: "HR & Corporate Administration",
    modules: [
      "Information Systems & Generative AI",
      "Personal Branding",
      "Corporate Office Management",
      "HR Operations & Employee Management",
      "Business Development & Sales",
      "Marketing & Digital Strategy",
      "Financial Management & Tally",
      "Entrepreneurship & Business Basics",
    ],
  },
  {
    title: "Hospital Administration & Healthcare Management",
    modules: [
      "Foundation of Healthcare",
      "Hospital Departments & Services",
      "Patient Relation & Service Management",
      "Healthcare Operations & Workflow",
      "Bio-medical Waste & Facility Safety",
      "Quality Management",
      "Hospital IT & Admin Tools",
      "Insurance & Billing Systems",
      "Healthcare Entrepreneurship",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="container mx-auto py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-12 text-brand-primary">Our Programs</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {programs.map((prog, idx) => (
          <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4 text-brand-secondary">{prog.title}</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {prog.modules.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
