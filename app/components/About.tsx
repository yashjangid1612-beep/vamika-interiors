export default function About() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          About <span className="text-yellow-500">Vamika Interiors</span>
        </h2>

        <p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto leading-8">
          Vamika Interiors specializes in premium residential and commercial
          interior design. We create elegant, modern and functional spaces with
          high-quality craftsmanship, from modular kitchens to complete turnkey
          interior solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-500">100+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
            <p>Happy Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">100%</h3>
            <p>Quality Work</p>
          </div>
        </div>
      </div>
    </section>
  );
}