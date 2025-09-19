const features = [
  "Live Classes",
  "Recorded Classes",
  "Flexible Class Timing",
  "Lifetime Spoken English",
  "Internationally Recognised Certification",
  "AI Integrated IT Training",
  "Personal Branding Training",
  "Career Support",
];

export default function WhyUs() {
  return (
    <section className="bg-brand-neutral py-20 px-6">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-brand-primary">Why Choose Us</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
