const roles = [
  "Marketing Manager", "Sales Manager", "HR Manager", "Quality Manager",
  "Health Information Manager", "Operations Manager", "Customer Relations Manager",
  "Front Office Manager", "IT Manager", "Education Centre Manager",
];

const sectors = [
  "Hospitals", "Clinics", "Diagnostic Centres", "IT Companies",
  "Insurance Companies", "Educational Institutions", "Retail Stores",
  "Consulting Firms", "Hotels", "Event Management", "Travel Companies",
];

export default function Careers() {
  return (
    <section id="careers" className="bg-brand-neutral py-20 px-6">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-brand-primary">Careers</h3>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-brand-secondary">Job Opportunities</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {roles.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-brand-secondary">Job Sectors</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {sectors.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
