export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-8 text-brand-primary">Contact Us</h3>
      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-secondary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-secondary"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-secondary"
        ></textarea>
        <button className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-secondary transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
