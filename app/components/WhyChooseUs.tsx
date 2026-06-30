export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality",
      description: "We use high-quality materials and finishes for every project.",
    },
    {
      title: "Modern Designs",
      description: "Elegant and functional interiors tailored to your lifestyle.",
    },
    {
      title: "On-Time Delivery",
      description: "Every project is completed within the committed timeline.",
    },
    {
      title: "Affordable Pricing",
      description: "Luxury interiors at competitive and transparent prices.",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Why <span className="text-yellow-500">Choose Us</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          We combine creativity, quality, and craftsmanship to create interiors
          you'll love.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-500">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}