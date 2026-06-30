export default function Services() {
  const services = [
    "Residential Interiors",
    "Modular Kitchen",
    "Bedroom Design",
    "TV Unit Design",
    "Wall Paneling",
    "False Ceiling",
    "Wooden Doors",
    "Turnkey Projects",
  ];

  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Our <span className="text-yellow-500">Services</span>
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          We provide complete interior design solutions tailored to your needs.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}